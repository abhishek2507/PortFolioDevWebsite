const { promises: fs } = require("fs");
const path = require("path");
const RSS = require("rss");
const matter = require("gray-matter");

exports.generate = async () => {
  const feed = new RSS({
    title: "Abhishek Singh",
    description: "Hey! I am Abhishek, a Senior Software Engineer from India",
    feed_url: "https://abhidev.com/feed.xml",
    site_url: "https://abhidev.com",
    managingEditor: "Abhishek Singh",
    webMaster: "Abhishek Singh",
    language: "en",
    copyright: `Abhishek Singh | ${new Date().getFullYear()}`,
  });

  const posts = await fs.readdir(path.join(__dirname, "..", "data", "blogs"));

  await Promise.all(
    posts.map(async (filename) => {
      const blogsData = await fs.readFile(
        path.join(path.join(__dirname, "..", "data", "blogs", filename))
      );

      const frontmatter = matter(blogsData);

      feed.item({
        title: frontmatter.data.title,
        description: frontmatter.data.subtitle,
        url: frontmatter.data.url,
        author: "Abhishek Singh",
        date: frontmatter.data.date,
        categories: frontmatter.data.tags.split(", "),
      });
    })
  );

  await fs.writeFile("./public/rss.xml", feed.xml({ indent: true }));
};
