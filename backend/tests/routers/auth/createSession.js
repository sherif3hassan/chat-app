// Test creating a session before testing GET /me

async function test() {
  // Make a request to GET /me
  const response = await fetch("http://localhost:3000/auth/create-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "test",
      password: "123",
    }),
  });

  // Get the response body
  const body = await response.json();
  console.log(body);
}

test()
  .then(() => {
    console.log("Test passed");
  })
  .catch((err) => {
    console.error(`Test failed: ${err.message}`);
  });
