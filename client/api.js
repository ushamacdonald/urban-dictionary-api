import request from 'superagent'

export function getDefinition (term, cb) {
  request
    .get('https://mashape-community-urban-dictionary.p.mashape.com/define')
    .set('X-Mashape-Key', '983OTIHON3mshsug4dfkMcunJMlkp1z6vAijsnRLGJotACG62p')
    .set('Accept', 'application/json')
    .query({term: 'Annah'})
    .end((err, res) => {
      cb(res.body)
    })
}
