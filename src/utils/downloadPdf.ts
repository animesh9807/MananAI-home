export async function downloadTestPdf() {
  const filename = "projectile-motion-theory-testing.pdf";

  // Try direct file download first
  try {
    const directLink = document.createElement("a");
    directLink.href = "/Projectile_Motion_Theory-testing.pdf";
    directLink.download = filename;
    document.body.appendChild(directLink);
    directLink.click();
    document.body.removeChild(directLink);
    return;
  } catch (err) {
    console.warn("Direct download failed, falling back to relative or blob:", err);
  }

  // Fallback to relative path
  const fallbackLink = document.createElement("a");
  fallbackLink.href = "Projectile_Motion_Theory-testing.pdf";
  fallbackLink.download = filename;
  document.body.appendChild(fallbackLink);
  fallbackLink.click();
  document.body.removeChild(fallbackLink);
}
