async function getData() {
  try {
    const res = await fetch('url');
    const data = await res.json();
  } catch (err) {
    console.log(err);
  }
}
