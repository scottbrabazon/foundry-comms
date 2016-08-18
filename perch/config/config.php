<?php
    define('PERCH_LICENSE_KEY', 'P21608-EDQ964-UTF155-YNR647-LAZ018');

    define("PERCH_DB_USERNAME", 'foundry2016');
    define("PERCH_DB_PASSWORD", 'kebabtheatrepistol');
    define("PERCH_DB_SERVER", "localhost");
    define("PERCH_DB_DATABASE", "foundry2016");
    define("PERCH_DB_PREFIX", "perch2_");
    
    define('PERCH_TZ', 'Europe/London');

    define('PERCH_EMAIL_FROM', 'scott.brabazon@foundrycomms.co.uk');
    define('PERCH_EMAIL_FROM_NAME', 'Scott Brabazon');

    define('PERCH_LOGINPATH', '/perch');
    define('PERCH_PATH', str_replace(DIRECTORY_SEPARATOR.'config', '', __DIR__));
    define('PERCH_CORE', PERCH_PATH.DIRECTORY_SEPARATOR.'core');

    define('PERCH_RESFILEPATH', PERCH_PATH . DIRECTORY_SEPARATOR . 'resources');
    define('PERCH_RESPATH', PERCH_LOGINPATH . '/resources');
    
    define('PERCH_HTML5', true);
    
    define('PERCH_RWD', true); 