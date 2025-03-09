import openai from "./config";
import supabase from "./vectorDb";

async function main() {
  const embeddings = await openai.embeddings.create({
    model: "text-embbeddings-v1",
    inputs: ["Hello, world!"],
  });

  console.log(embeddings.data[0].embedding);
}

main();
