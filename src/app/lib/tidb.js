import mysql from 'mysql2';

let pool = null;

export function connect() {
    return mysql.createPool({
        host: process.env.TIDB_HOST || 'gateway01.ap-northeast-1.prod.aws.tidbcloud.com', // TiDB host, for example: {gateway-region}.aws.tidbcloud.com
        port: process.env.TIDB_PORT || 4000, // TiDB port, default: 4000
        user: process.env.TIDB_USER || '4TaSoULqSdctTCK.root', // TiDB user, for example: {prefix}.root
        password: process.env.TIDB_PASSWORD, // The password of TiDB user.
        database: process.env.TIDB_DATABASE || 'WAKKASON', // TiDB database name, default: test
        ssl: {
            minVersion: 'TLSv1.2',
            rejectUnauthorized: true,
        },
        connectionLimit: 1, // Setting connectionLimit to "1" in a serverless function environment optimizes resource usage, reduces costs, ensures connection stability, and enables seamless scalability.
        maxIdle: 1, // max idle connections, the default value is the same as `connectionLimit`
        enableKeepAlive: true,
    });
}

export function getPool() {
    if (!pool) {
        pool = connect();
    }
    return pool;
}

export function singleQuery(sql, ...args) {
    const pool = getPool();
    return new Promise((resolve, reject) => {
        pool.query(sql, ...args, (err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve({ results, fields });
            }
        })
    })
};