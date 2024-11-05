import { Hono, Next } from 'hono'

const app = new Hono()


// simple auth middleware
async function authMiddlware(c: any, Next: any) {
  if(c.req.header("Authorization")) {
    // do authentication

    await Next();
  }else {
    return c.text("you do not have access")
  }
}
// -> you can use any one either app.use() or pass it in the request body
// app.use(authMiddlware)

app.post('/', authMiddlware, async (c) => {
 
  const body = await c.req.json()

  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query());

  return c.text('Hello Hono!')
})





export default app
