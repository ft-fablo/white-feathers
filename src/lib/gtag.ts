export const trackGoogleConversion = (
  sendTo: string = "AW-17945040562/8xZRCMDT3fYBeLKt7uxC",
  value: number = 1.0,
  currency: string = "AED"
) => {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", "conversion", {
      send_to: sendTo,
      value: value,
      currency: currency,
    });
  }
};
