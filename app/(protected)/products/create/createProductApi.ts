export async function createProductApi(data: {
  name: string;
  price: number;
}) {
  const response = await fetch(
    `${process.env.API_URL}/api/products`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create product");
  }

  return response.json();
}