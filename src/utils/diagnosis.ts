// utils/diagnosis.ts
export async function getDiagnosisFromAPI(imageUrl: string) {
  const formData = new FormData();
  formData.append('file', await fetch(imageUrl).then(res => res.blob()));

  // Use your local proxy route instead of direct Azure call
  const res = await fetch("/api/proxy", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Failed to get diagnosis from ML API via proxy");
  }

  const data = await res.json();
  return {
    label: data.predicted_class,
    confidence: data.confidence,
    severity: data.confidence > 0.75 ? 'High' : data.confidence > 0.4 ? 'Moderate' : 'Low',
  };
}
