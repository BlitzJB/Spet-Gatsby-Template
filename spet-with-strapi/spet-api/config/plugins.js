module.exports = ({ env }) => ({
    upload: {
		// update here cloudinary credential here
        provider: "cloudinary",
        providerOptions: {
            cloud_name: "...",
            api_key: "...",
            api_secret: "...",
        },
    },
});