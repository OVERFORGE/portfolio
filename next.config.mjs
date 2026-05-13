/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Allow mobile network testing without HMR CORS blocks natively */
  allowedDevOrigins: ['192.168.1.67', 'localhost:3000', '10.177.208.168'],
};

export default nextConfig;
