const { execSync } = require('child_process');
try {
    execSync('npm run build', { stdio: 'pipe' });
    console.log("Success");
} catch (err) {
    console.log("----- STDOUT -----");
    console.log(err.stdout.toString());
    console.log("----- STDERR -----");
    console.log(err.stderr.toString());
}
