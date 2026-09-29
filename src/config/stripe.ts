export const STRIPE_CONFIG = {
  productId: 'prod_VLKBGOn7cRALA5',
  prices: {
    free: {
      id: 'free',
      name: 'Gratuit',
      price: 0,
      period: 'toujours',
      description: 'Idéal pour découvrir CopyBoost et générer vos premiers contenus gratuitement.',
    },
    pro: {
      id: 'price_1UKdWkGI3M308BRA2D3Ewcv3',
      name: 'Pro',
      price: 19,
      period: 'mois',
      description: 'Pour les créateurs et entrepreneurs exigeants qui veulent accélérer leur production de contenu.',
      paymentLink: 'https://buy.stripe.com/test_7sY7sLcr4aVo2Rp1Ca7kc00',
    },
    agence: {
      id: 'price_1UKdWsGI3M308BRArRbgqZF9',
      name: 'Agence',
      price: 49,
      period: 'mois',
      description: 'La solution complète pour les équipes, agences marketing et gestion multi-marques.',
      paymentLink: 'https://buy.stripe.com/test_3cIbJ14YC2oS63B0y67kc01',
    },
  },
};
