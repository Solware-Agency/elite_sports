import { instagramConfig } from './instagram-config';

/**
 * Construye la URL de autenticación OAuth de Instagram
 * Esta URL debe ser abierta por el usuario para autorizar la aplicación
 * 
 * IMPORTANTE: Usa el endpoint oficial de Instagram OAuth
 * https://api.instagram.com/oauth/authorize
 */
export function buildInstagramAuthUrl(): string {
  // Leer variables directamente de process.env para asegurar que sean correctas
  const clientId = process.env.INSTAGRAM_APP_ID;
  const redirectUri = process.env.INSTAGRAM_REDIRECT_URI;
  
  // Validar que las variables estén configuradas
  if (!clientId) {
    throw new Error('INSTAGRAM_APP_ID no está configurado en las variables de entorno');
  }
  
  if (!redirectUri) {
    throw new Error('INSTAGRAM_REDIRECT_URI no está configurado en las variables de entorno');
  }

  // Construir el URL exactamente como lo requiere Instagram OAuth
  const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${encodeURIComponent(clientId)}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=user_profile,user_media&response_type=code`;

  // Mostrar el URL en consola para verificación
  console.log('🔗 URL de autorización de Instagram generada:');
  console.log(authUrl);
  console.log('📋 Variables utilizadas:');
  console.log('  - INSTAGRAM_APP_ID:', clientId);
  console.log('  - INSTAGRAM_REDIRECT_URI:', redirectUri);

  return authUrl;
}

/**
 * Intercambia el código de autorización por un short-lived token
 */
export async function exchangeCodeForShortToken(code: string): Promise<{
  access_token: string;
  user_id: number;
}> {
  const { appId, appSecret, redirectUri } = instagramConfig;

  if (!appId || !appSecret) {
    throw new Error('Credenciales de Instagram no configuradas');
  }

  const response = await fetch('https://api.instagram.com/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: appId,
      client_secret: appSecret,
      grant_type: 'authorization_code',
      redirect_uri: redirectUri,
      code: code,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('Error al intercambiar código por token:', errorData);
    throw new Error(
      `Error al obtener short-lived token: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();
  return data;
}

/**
 * Intercambia un short-lived token por un long-lived token (60 días)
 */
export async function exchangeShortForLongToken(shortToken: string): Promise<{
  access_token: string;
  token_type: string;
  expires_in: number;
}> {
  const { appSecret } = instagramConfig;

  if (!appSecret) {
    throw new Error('INSTAGRAM_APP_SECRET no está configurado');
  }

  const url = new URL('https://graph.instagram.com/access_token');
  url.searchParams.append('grant_type', 'ig_exchange_token');
  url.searchParams.append('client_secret', appSecret);
  url.searchParams.append('access_token', shortToken);

  const response = await fetch(url.toString(), {
    method: 'GET',
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('Error al intercambiar short token por long token:', errorData);
    throw new Error(
      `Error al obtener long-lived token: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();
  return data;
}

