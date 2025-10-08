import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Starting Lingumate Development - All Servers...\n');
console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}\n`);

// Main Backend API Server
console.log('🌐 Starting Main Backend API Server...');
const mainServer = spawn('npx', ['tsx', join(__dirname, 'index.ts')], {
    stdio: 'inherit',
    env: { ...process.env, PORT: process.env.PORT || '5000', NODE_ENV: 'development' },
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
console.log('🌐 Main Backend API:           http://localhost:5000');
console.log('🤝 Handshake WebSocket:        ws://localhost:3001');
console.log('🌍 Real-time Translation WS:   ws://localhost:3002');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('\n💡 Press Ctrl+C to stop all servers\n');

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
    
    // Give servers time to gracefully shut down
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

