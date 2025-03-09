async function main(input) {
  const data = await Promise.all(
    input.map(async (textChunk) => {
      const embeddingResponse = await openai.embeddings.create({
        model: "text-embedding-ada-002",
        input: textChunk,
      });
      return {
        content: textChunk,
        embedding: embeddingResponse.data[0].embedding,
      };

      // Insert content and embedding into Supabase
    })
  );
  console.log("Embedding complete!");
  await supabase.from("documents").insert(data);
}
