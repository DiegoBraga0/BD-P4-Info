/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_PRODUTOS', table => {
        table.integer('COD_PROD').primary()
        table.string('NOME_PROD').notNull()
        table.double('PRECO_UNIT').notNull()
      
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
    return knex.schema.dropTable('TB_PRODUTOS')
};
