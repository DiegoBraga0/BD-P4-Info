/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_VENDEDORES', table => {
        table.integer('COD_VEND').primary()
        table.string('NOME_VEND').notNull()
    })/*.then(function () {
        return knex('perfis').insert([
            { nome: 'comum', rotulo: 'Comum' },
            { nome: 'admin', rotulo: 'Administrador' },
        ])
    })*/
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_VENDEDORES')
};
