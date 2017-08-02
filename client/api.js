import request from 'superagent'

export function getDefinition (search, cb) {
  request
    .get(`https://mashape-community-urban-dictionary.p.mashape.com/define?term=${search}`)
    .set('X-Mashape-Key', '983OTIHON3mshsug4dfkMcunJMlkp1z6vAijsnRLGJotACG62p')
    .set('Accept', 'application/json')
    .end((err, res) => {
      cb(res.body)
    })
}

export function getGif (cb) {

  request
    .get("https://giphy.p.mashape.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cute")
    .set('X-Mashape-Key', '983OTIHON3mshsug4dfkMcunJMlkp1z6vAijsnRLGJotACG62p')
    .set('Accept', 'application/json')
    .end((err, res) => {
      cb(res.body)
    })
}
