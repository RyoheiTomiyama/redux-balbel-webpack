var config = {
	URL: "http://fledge.jp",
	mURI: "mongodb://localhost/fledgetest",
	facebook: {
		appId: "1723816061237103",
		appSecret: "078f6532bda6f91e1ad03ec4f14aca7f",
		callback: "https://fledge.jp/auth/facebook/callback"
	},
	twitter: {
		appId: "pbaiFrmASQpbTvCgec9q65IT7",
		appSecret: "l7kpNDJ9ueXIztJwSvTozwgBAvYuDB9RMgRerdTghcqSugbnAj",
		callback: "https://fledge.jp/auth/twitter/callback"
	},
	google: {
		clientId: "674236372419-5pq2roqefq6bbiqek0lu58fkiq1hou9m.apps.googleusercontent.com",
		clientSecret: "P5NburEVSu6yGoecCnD6Bh4W",
		callback: "https://fledge.jp/auth/google/callback"
	},
	nodemailer: {
		host: "mail.fledge.jp",
		port: "587",
		auth: {
			user: "info",
			pass: "fnana0207"
		},
		tls: {
	    	rejectUnauthorized: false
		}
	},
	cipher: {
		key: "fnana0207",
		alg: "aes256",
		encoding: "hex"
	}
};
module.exports = config;