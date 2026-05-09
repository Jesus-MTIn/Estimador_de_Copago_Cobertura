const { createClient } = require('@supabase/supabase-js');

// Extraemos las credenciales del .env usando el nombre correcto
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // <- ¡Aquí estaba el cambio!

// Creamos el cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;