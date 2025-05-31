# Makefile for AI Infographic project

# Variables
NODE_ENV ?= development
NPM := npm
BUN := bun
PORT := 8080

# Default target
.PHONY: all
all: install build

# Install dependencies
.PHONY: install
install:
	@echo "Installing dependencies..."
	$(NPM) install

# Install dependencies with bun
.PHONY: install-bun
install-bun:
	@echo "Installing dependencies with bun..."
	$(BUN) install

# Start development server
.PHONY: dev
dev:
	@echo "Starting development server on port $(PORT)..."
	$(NPM) run dev

# Start development server with bun
.PHONY: dev-bun
dev-bun:
	@echo "Starting development server with bun on port $(PORT)..."
	$(BUN) run dev

# Build for production
.PHONY: build
build:
	@echo "Building for production..."
	$(NPM) run build

# Build for development
.PHONY: build-dev
build-dev:
	@echo "Building for development..."
	$(NPM) run build:dev

# Build with bun
.PHONY: build-bun
build-bun:
	@echo "Building with bun..."
	$(BUN) run build

# Preview production build
.PHONY: preview
preview:
	@echo "Previewing production build..."
	$(NPM) run preview

# Preview with bun
.PHONY: preview-bun
preview-bun:
	@echo "Previewing production build with bun..."
	$(BUN) run preview

# Lint code
.PHONY: lint
lint:
	@echo "Linting code..."
	$(NPM) run lint

# Clean build artifacts
.PHONY: clean
clean:
	@echo "Cleaning build artifacts..."
	rm -rf dist
	rm -rf node_modules/.vite

# Deep clean (remove all generated files and dependencies)
.PHONY: clean-all
clean-all: clean
	@echo "Deep cleaning project..."
	rm -rf node_modules

# Help target
.PHONY: help
help:
	@echo "AI Infographic Makefile Help"
	@echo "============================"
	@echo "Available targets:"
	@echo "  all         : Install dependencies and build for production (default)"
	@echo "  install     : Install dependencies with npm"
	@echo "  install-bun : Install dependencies with bun"
	@echo "  dev         : Start development server with npm"
	@echo "  dev-bun     : Start development server with bun"
	@echo "  build       : Build for production with npm"
	@echo "  build-dev   : Build for development with npm"
	@echo "  build-bun   : Build for production with bun"
	@echo "  preview     : Preview production build with npm"
	@echo "  preview-bun : Preview production build with bun"
	@echo "  lint        : Lint code"
	@echo "  clean       : Clean build artifacts"
	@echo "  clean-all   : Remove all generated files and dependencies"
	@echo "  help        : Show this help message"