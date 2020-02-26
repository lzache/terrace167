<?php

/**

 * The base configuration for WordPress

 *

 * The wp-config.php creation script uses this file during the

 * installation. You don't have to use the web site, you can

 * copy this file to "wp-config.php" and fill in the values.

 *

 * This file contains the following configurations:

 *

 * * MySQL settings

 * * Secret keys

 * * Database table prefix

 * * ABSPATH

 *

 * @link https://codex.wordpress.org/Editing_wp-config.php

 *

 * @package WordPress

 */


// ** MySQL settings - You can get this info from your web host ** //

/** The name of the database for WordPress */

define( 'DB_NAME', "laurenz0_author" );


/** MySQL database username */

define( 'DB_USER', "laurenz0_zeeauth" );


/** MySQL database password */

define( 'DB_PASSWORD', "Poiuytr!33" );


/** MySQL hostname */

define( 'DB_HOST', "localhost" );


/** Database Charset to use in creating database tables. */

define( 'DB_CHARSET', 'utf8mb4' );


/** The Database Collate type. Don't change this if in doubt. */

define( 'DB_COLLATE', '' );


/**#@+

 * Authentication Unique Keys and Salts.

 *

 * Change these to different unique phrases!

 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}

 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.

 *

 * @since 2.6.0

 */

define( 'AUTH_KEY',         '!|!`z<~NP$6Jj7~EEj_4D@sd5`~>qL!=`i%,r/y,Ny=$]haipT(*S3(v@H@7x@{O' );

define( 'SECURE_AUTH_KEY',  '>|xp;e2`WVX0S`)}H5t(ihwL 8OL@s]l3W@Um`*JGnb+eCs4?ml@D[`2AD[wi5/{' );

define( 'LOGGED_IN_KEY',    'NG9#-=etnJ5mN)u.NCZ%d*sq-v)l^ej>J-MH~NUNO.5B-<mrOL7g(*B)]E.@tzhx' );

define( 'NONCE_KEY',        '9YMEpc@XQ_$_WvTORh%M+0nc{ez+9|K0cyk#8Gg>Ar{z33!/Zr>K{`9^4Ld1;Im-' );

define( 'AUTH_SALT',        '56s3J<F*kEq|g{fayuMf}M.uV#x!gFUvRr&4V>4pS?{qHz;F?Q91+fGRhbgFa~wT' );

define( 'SECURE_AUTH_SALT', 'U7}Wm:WkgPD]T+KVC`-~SbxDXQAa)UHw_+_EU/j +G`,my%n!=E;!8~eg#[zju<A' );

define( 'LOGGED_IN_SALT',   'RyfF/:0w%){j/b#[vt]o^P%{H*:Y#>rd6_fT2AWrWY:FbutR:f?+<WDSC$E|l8I}' );

define( 'NONCE_SALT',       'Xo#9C6+5p}|r[.I^42_[W[9y{xf+T9M%hjF.97wHz@[_BD#4oW]+s-Jm_;4MxD<>' );


/**#@-*/


/**

 * WordPress Database Table prefix.

 *

 * You can have multiple installations in one database if you give each

 * a unique prefix. Only numbers, letters, and underscores please!

 */

$table_prefix = 'wp_final__';


/**

 * For developers: WordPress debugging mode.

 *

 * Change this to true to enable the display of notices during development.

 * It is strongly recommended that plugin and theme developers use WP_DEBUG

 * in their development environments.

 *

 * For information on other constants that can be used for debugging,

 * visit the Codex.

 *

 * @link https://codex.wordpress.org/Debugging_in_WordPress

 */

define( 'WP_DEBUG', false );


/* That's all, stop editing! Happy publishing. */


/** Absolute path to the WordPress directory. */

if ( ! defined( 'ABSPATH' ) ) {

	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

}


/** Sets up WordPress vars and included files. */

require_once( ABSPATH . 'wp-settings.php' );

