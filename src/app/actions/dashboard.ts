const API_SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export async function getAllData(query: string) {
  try {
    const response = await fetch(`${API_SERVER}/api/dashboard?eventName=${query}`, {
      credentials: "include",
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
