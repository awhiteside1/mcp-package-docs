#!/usr/bin/env node
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { PackageDocsServer } from "./package-docs-server.js";
import { logger } from "./utils/logger.js";

// Initialise and run the server
async function main() {
	try {
		const server = new PackageDocsServer();
		const transport = new StdioServerTransport();
		await server.connect(transport);
		logger.debug("Package docs MCP server running on stdio");
	} catch (error) {
		logger.error("Failed to start server:", error);
		process.exit(1);
	}
}

main().catch((error) => {
	logger.error("Unhandled error:", error);
	process.exit(1);
});
