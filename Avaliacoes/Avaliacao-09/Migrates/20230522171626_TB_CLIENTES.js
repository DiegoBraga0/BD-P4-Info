/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_CLIENTES', table => {
        table.integer('COD_CLI').primary()
        table.string('NOME_CLI').notNull()
        table.string('END_CLI').notNull()   
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_CLIENTES')
};