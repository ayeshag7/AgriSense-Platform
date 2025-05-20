export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const res = await fetch("https://wheatapi-eue7g0fehdc0hwbg.southeastasia-01.azurewebsites.net/predict", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
      status: res.status,
    });
  } catch (error) {
    console.error("Proxy Error:", error);
    return new Response(JSON.stringify({ error: "Proxy failed to connect to ML API." }), {
      status: 500,
    });
  }
}
