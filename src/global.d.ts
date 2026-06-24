declare module "*.module.css" {
  const classes: Readonly<{ [key: string]: string }>;
  export default classes;
}

declare module "@tomny-dev/uzi/styles.css" {
  // CSS-only module, no JS exports needed
}