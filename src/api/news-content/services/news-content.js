'use strict';

/**
 * news-content service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-content.news-content');
