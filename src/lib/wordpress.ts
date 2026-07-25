import { SERVICES_DATA, ServiceDetail, ProductItem } from "@/data/servicesData";

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

/**
 * Fetch GraphQL data from WordPress instance
 */
async function fetchAPI(query: string, { variables }: { variables?: Record<string, unknown> } = {}) {
  if (!WORDPRESS_API_URL) {
    return null;
  }

  const headers = { "Content-Type": "application/json" };

  try {
    const res = await fetch(WORDPRESS_API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({ query, variables }),
      cache: "no-store", // Instant live sync with WordPress
    });

    const json = await res.json();
    if (json.errors) {
      console.warn("WordPress GraphQL Warning/Errors:", json.errors);
      if (json.data) return json.data;
      return null;
    }
    return json.data;
  } catch (error) {
    console.error("Failed to fetch from WordPress API:", error);
    return null;
  }
}

function getImageUrl(imgField: any): string {
  if (!imgField) return "";
  if (typeof imgField === "string") return imgField;
  if (imgField?.node?.sourceUrl) return imgField.node.sourceUrl;
  if (imgField?.sourceUrl) return imgField.sourceUrl;
  if (imgField?.mediaItemUrl) return imgField.mediaItemUrl;
  return "";
}

/**
 * Match a product name to an uploaded WordPress Media Item by slug
 */
function findWPImageForProduct(prodName: string, mediaList: any[]): string | null {
  if (!mediaList || mediaList.length === 0) return null;
  const slugified = prodName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  
  // Exact slug match or substring match
  const match = mediaList.find(
    (m) => m.slug === slugified || m.slug.includes(slugified) || slugified.includes(m.slug)
  );
  
  return match ? match.sourceUrl : null;
}

/**
 * Get all services data (from WordPress Posts & Media Library or fallback to local static data)
 */
export async function getAllServices(): Promise<ServiceDetail[]> {
  if (!WORDPRESS_API_URL) {
    return SERVICES_DATA;
  }

  const query = `
    query GetAllServicesPostsAndMedia {
      posts(first: 20) {
        nodes {
          databaseId
          slug
          title
          serviceFields {
            tagline
            desc
            materials
            image {
              node {
                sourceUrl
              }
            }
          }
        }
      }
      mediaItems(first: 100) {
        nodes {
          title
          slug
          sourceUrl
        }
      }
    }
  `;

  const data = await fetchAPI(query);

  if (!data?.posts?.nodes || data.posts.nodes.length === 0) {
    return SERVICES_DATA;
  }

  const mediaList = data?.mediaItems?.nodes || [];

  return data.posts.nodes.map((node: any) => {
    const fields = node.serviceFields || {};
    const coverImage = getImageUrl(fields.image) || "/services/box.png";
    const fallbackService = SERVICES_DATA.find((s) => s.slug === node.slug) || SERVICES_DATA[0];

    // Collect distinct uploaded WordPress images for all products in this service
    const serviceProductImages = fallbackService.products.map(
      (p) => findWPImageForProduct(p.name, mediaList) || p.image
    );

    // Map all 6 products with their distinct product images & distinct lightbox galleries
    const productsList: ProductItem[] = fallbackService.products.map((fallbackItem, i) => {
      const wpProductImg = serviceProductImages[i];
      
      // Build 4 distinct product gallery photos for the lightbox viewer (no repeating cover image!)
      const galleryPhotos = [
        wpProductImg,
        ...serviceProductImages.filter((img) => img !== wpProductImg),
      ].slice(0, 4);

      return {
        id: `wp-${node.databaseId}-${i + 1}`,
        name: fallbackItem.name,
        desc: fallbackItem.desc,
        image: wpProductImg,
        gallery: galleryPhotos.length >= 4 ? galleryPhotos : [wpProductImg, wpProductImg, wpProductImg, wpProductImg],
      };
    });

    return {
      id: node.databaseId,
      slug: node.slug,
      title: node.title || fallbackService.title,
      tagline: fields.tagline || fallbackService.tagline,
      desc: fields.desc || fallbackService.desc,
      longDesc: fields.desc || fallbackService.longDesc,
      materials: fields.materials || fallbackService.materials,
      image: coverImage || fallbackService.image,
      gradient: fallbackService.gradient || "from-[#8a6834]/40 to-black",
      features: fallbackService.features,
      specifications: fallbackService.specifications,
      useCases: fallbackService.useCases,
      products: productsList,
    };
  });
}

/**
 * Get single service details by slug
 */
export async function getServiceBySlug(slug: string): Promise<ServiceDetail | undefined> {
  const allServices = await getAllServices();
  return allServices.find((s) => s.slug === slug);
}
