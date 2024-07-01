export const generateTitle = (pathname: string) => {
  const slug = pathname.split("/").pop();
  return slug ? `${slug.charAt(0).toUpperCase() + slug.slice(1)} | TenoxUI Docs` : "TenoxUI Documentation";
};
