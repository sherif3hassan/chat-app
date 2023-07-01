// Test GET /me

async function test() {
  // Make a request to GET /me
  const response = await fetch("http://localhost:3000/auth/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
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
