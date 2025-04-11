// api/link.js
module.exports = (req, res) => {
  const { author, topic } = req.query;

  // Simple check: if both parameters are present, construct a deep link.
  // In a real scenario, you’d look up the correct Logos resource ID based on the author/topic.
  if (author && topic) {
    // For demonstration, we’re just appending the parameters into a URL.
    // Replace this logic with your own lookup if needed.
    const deepLink = `https://app.logos.com/books/LLS:${encodeURIComponent(author)}_${encodeURIComponent(topic)}`;
    res.setHeader("Content-Type", "text/plain");
    return res.status(200).send(deepLink);
  }

  res.setHeader("Content-Type", "text/plain");
  return res.status(404).send("Resource not found");
};

