import api from "../lib/data";

// Fetch all valid posts & authors to display in the homepage
export async function get() {

  try {
    const { settings } = await api.getSettings();
    return {
      status: 200,
      body: {  settings }
    };
  } catch (err) {
    console.error(err);
    return {
      status: 500,
      error: new Error(`Could not load url`),
    };
  }

}
