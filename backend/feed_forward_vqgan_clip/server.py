from flask import Flask, send_file
from flask_cors import CORS, cross_origin
from main import test

app = Flask(__name__)


cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/<prompt>')
@cross_origin()
def get_image(prompt):
    filename = test("cc12m_32x1024_mlp_mixer_clip_ViTB32_256x256_v0.3.th", prompt)

    return send_file(filename, as_attachment=True, mimetype='image/png')

app.run(host='0.0.0.0' , port=5000)
