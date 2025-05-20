export async function uploadToCloudinary(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'zveliyyq'); 

  const res = await fetch(`https://api.cloudinary.com/v1_1/dqresf5en/image/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Failed to upload image to Cloudinary");
  }

  const data = await res.json();
  return data.secure_url; // Direct URL to the uploaded image
}
