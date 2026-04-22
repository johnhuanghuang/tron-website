// @ts-check

/**
 * @typedef {Object} DocPage
 * @property {string} slug
 * @property {string} title
 * @property {string} category
 * @property {number} order
 * @property {string} content
 * @property {string} [lastUpdated]
 */

/**
 * @typedef {Object} DocCategory
 * @property {string} id
 * @property {string} label
 * @property {{slug: string, title: string}[]} pages
 */

/**
 * @typedef {Object} DocIndex
 * @property {DocCategory[]} categories
 */

module.exports = {};
