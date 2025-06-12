const axios = require('axios');
const assert = require('assert');

async function runAddObjectTest() {
  try {
    /**
     * Set your payload in json.
     */
    const payload = {
      name: "Apple MacBook Pro 16",
      data: {
        year: 2019,
        price: 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
      }
    };

    // Set your URL
    const url = 'https://api.restful-api.dev/objects';

    // Make a POST request to the RESTful API
    // Ensure the API endpoint is correct and accessible
    const response = await axios.post(url, payload, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const data = response.data;

    // Assertions
    assert.strictEqual(response.status, 200, "Status code is not 200");
    assert.ok(data.id, "Missing 'id' in response");
    assert.ok(data.name, "Missing 'name' in response");
    assert.ok(data.createdAt, "Missing 'createdAt' in response");
    assert.ok(data.data, "Missing 'data' in response");

    console.log("✅ All runAddObjectTest passed!");
  } catch (error) {
    console.error("❌ Test failed:", error.message);
    process.exit(1);
  }
}

async function runGetObjectTest() {
  try {
    /**
     * Set your payload in json.
     */
    const payload = {};

    // Set your URL
    const url = 'https://api.restful-api.dev/objects';

    // Make a GET request to the RESTful API
    // Ensure the API endpoint is correct and accessible
    const response = await axios.get(url, payload, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const data = response.data;

    // Assertions
    assert.strictEqual(response.status, 200, "Status code is not 200");
    assert.ok(data[0].id, "Missing 'id' in response");
    assert.ok(data[0].name, "Missing 'name' in response");
    assert.ok(data[0].data, "Missing 'data' in response");

    console.log("✅ All runGetObjectTest passed!");
  } catch (error) {
    console.error("❌ Test failed:", error.message);
    process.exit(1);
  }
}

async function runGetAnObjectTest() {
  try {
    /**
     * Set your payload in json.
     */
    const payload = {};

    const id = 7; // Example ID, change as needed

    // Set your URL
    const url = `https://api.restful-api.dev/objects/${id}`;

    // Make a GET request to the RESTful API
    // Ensure the API endpoint is correct and accessible
    const response = await axios.get(url, payload, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const data = response.data;

    // Assertions
    assert.strictEqual(response.status, 200, "Status code is not 200");
    assert.ok(data.id, "Missing 'id' in response");
    assert.ok(data.name, "Missing 'name' in response");
    assert.ok(data.data, "Missing 'data' in response");

    console.log("✅ All runGetAnObjectTest passed!");
  } catch (error) {
    console.error("❌ Test failed:", error.message);
    process.exit(1);
  }
}

runAddObjectTest();
runGetObjectTest();
runGetAnObjectTest();