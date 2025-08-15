/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.theaivalue.com', // domain chính, không có /
  generateRobotsTxt: true, // tự tạo robots.txt
  sitemapSize: 5000,       // số lượng URL mỗi sitemap
  changefreq: 'weekly',    // tần suất cập nhật trang
  priority: 0.7,           // độ ưu tiên trung bình cho các trang
};
