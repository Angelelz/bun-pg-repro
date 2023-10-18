import postgres from 'postgres';

const client = postgres("postgres://root:root@localhost:5432/postgres");

async function main() {
  try {
    const res = await client`SELECT ${'hello world!'}::text as message`
    console.log(res) // Hello world!
  } catch (err) {
    console.error(err);
  } finally {
    await client.end()
  }
}

main().then(() => console.log("done")).catch(console.error);

