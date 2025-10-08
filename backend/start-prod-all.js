import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Starting Lingumate Production - All Servers...\n');
console.log(`📊 Environment: ${process.env.NODE_ENV || 'production'}\n`);

// Main Backend API Server (from dist)
console.log('🌐 Starting Main Backend API Server...');
const mainServer = spawn('node', [join(__dirname, 'dist', 'index.js')], {
    stdio: 'inherit',
    env: { ...process.env, PORT: process.env.PORT || '5000', NODE_ENV: 'production' },
    shell: true
});

// Handshake WebSocket Server
console.log('🤝 Starting Handshake WebSocket Server...');
const handshakeServer = spawn('node', [join(__dirname, 'handshakeServer.js')], {
    stdio: 'inherit',
    env: { ...process.env, HANDSHAKE_PORT: process.env.HANDSHAKE_PORT || '3001' },
    shell: true
});

// Real-time Translation WebSocket Server
console.log('🌍 Starting Real-time Translation WebSocket Server...');
const realtimeServer = spawn('node', [join(__dirname, 'realtimeTranslationServer.js')], {
    stdio: 'inherit',
    env: { ...process.env, REALTIME_TRANSLATION_PORT: process.env.REALTIME_TRANSLATION_PORT || '3002' },
    shell: true
});

console.log('\n✅ All servers are starting...');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`🌐 Main Backend API:           Port ${process.env.PORT || '5000'}`);
console.log(`🤝 Handshake WebSocket:        Port ${process.env.HANDSHAKE_PORT || '3001'}`);
console.log(`🌍 Real-time Translation WS:   Port ${process.env.REALTIME_TRANSLATION_PORT || '3002'}`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('\n💡 Production Mode - All servers running\n');

// Handle server crashes
mainServer.on('exit', (code) => {
    if (code !== 0 && code !== null) {
        console.log(`❌ Main backend server exited with code ${code}`);
        console.log('🛑 Shutting down all servers...');
        handshakeServer.kill();
        realtimeServer.kill();
        process.exit(1);
    }
});

handshakeServer.on('exit', (code) => {
    if (code !== 0 && code !== null) {
        console.log(`❌ Handshake server exited with code ${code}`);
        console.log('⚠️  Handshake server stopped, but continuing with other servers...');
    }
});

realtimeServer.on('exit', (code) => {
    if (code !== 0 && code !== null) {
        console.log(`❌ Real-time server exited with code ${code}`);
        console.log('⚠️  Real-time server stopped, but continuing with other servers...');
    }
});

// Handle process termination
process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down all servers...');
    mainServer.kill('SIGINT');
    handshakeServer.kill('SIGINT');
    realtimeServer.kill('SIGINT');
    
    setTimeout(() => {
        process.exit(0);
    }, 1000);
});

process.on('SIGTERM', () => {
    console.log('\n🛑 Shutting down all servers...');
    mainServer.kill('SIGTERM');
    handshakeServer.kill('SIGTERM');
    realtimeServer.kill('SIGTERM');
    
    setTimeout(() => {
        process.exit(0);
    }, 1000);
});

