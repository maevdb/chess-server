/**
 * Config source: https://git.io/JesV9
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Env from '@ioc:Adonis/Core/Env'
import type { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

const Url = require('url-parse');
const databaseUrl = new Url(Env.get('DATABASE_URL'))
const databaseConfig: DatabaseConfig = {
  /*
  |--------------------------------------------------------------------------
  | Connection
  |--------------------------------------------------------------------------
  |
  | The primary connection for making database queries across the application
  | You can use any key from the `connections` object defined in this same
  | file.
  |
  */
  connection: Env.get('DB_CONNECTION'),

  connections: {
    /*
    |--------------------------------------------------------------------------
    | PostgreSQL config
    |--------------------------------------------------------------------------
    |
    | Configuration for PostgreSQL database. Make sure to install the driver
    | from npm when using this connection
    |
    | npm i pg
    |
    */
    pg: {
			client: 'pg',
      connection: {
        host: Env.get('DB_HOST', databaseUrl.hostname),
				port: Env.get('DB_PORT', databaseUrl.port),
				user: Env.get('DB_USER', databaseUrl.username),
				password: Env.get('DB_PASSWORD', databaseUrl.password),
				database: Env.get('DB_DATABASE', databaseUrl.pathname.substr(1)),
				ssl: {
      		rejectUnauthorized: false
    		}
      },
      migrations: {
        naturalSort: true,
      },
      healthCheck: false,
      debug: false,
    },
  },
}

export default databaseConfig
