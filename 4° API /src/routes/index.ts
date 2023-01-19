//ROUTER: objeto do roteador

import { Router } = from 'express' //estou impotando do express

const router = Router();

router.get('/', (req, res) => {
    res.send('API com express e typescript')
});

