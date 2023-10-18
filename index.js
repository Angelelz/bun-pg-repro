import postgres from 'postgres';

const client = postgres("postgres://root:root@localhost:5432/postgres");

async function main() {
  const res = await client`SELECT ${'hello world!'}::text as message`
  console.log(res) // Hello world!
  return client
}

main()
  .then(() => console.log("done"))
  .catch(console.error)
  .finally(() => client.end());

