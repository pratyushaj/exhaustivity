var webppl = require("/usr/local/lib/node_modules/webppl/src/main.js");
var args = require("/usr/local/lib/node_modules/webppl/src/args.js");
args.makeGlobal(__filename, process.argv.slice(2));
var __runner__ = util.trampolineRunners.cli();
function topK(s, x) {
  console.log(x);
};
var main = (function (_globalCurrentAddress) {
    return function (p) {
        return function (runTrampoline) {
            return function (s, k, a) {
                runTrampoline(function () {
                    return p(s, k, a);
                });
            };
        };
    }(function (globalStore, _k0, _address0) {
        var _currentAddress = _address0;
        _addr.save(_globalCurrentAddress, _address0);
        var Bernoulli = dists.makeBernoulli;
        var Beta = dists.makeBeta;
        var Binomial = dists.makeBinomial;
        var Categorical = dists.makeCategorical;
        var Cauchy = dists.makeCauchy;
        var Delta = dists.makeDelta;
        var DiagCovGaussian = dists.makeDiagCovGaussian;
        var Dirichlet = dists.makeDirichlet;
        var Discrete = dists.makeDiscrete;
        var Exponential = dists.makeExponential;
        var Gamma = dists.makeGamma;
        var Gaussian = dists.makeGaussian;
        var ImproperUniform = dists.makeImproperUniform;
        var IspNormal = dists.makeIspNormal;
        var KDE = dists.makeKDE;
        var Laplace = dists.makeLaplace;
        var LogisticNormal = dists.makeLogisticNormal;
        var LogitNormal = dists.makeLogitNormal;
        var Marginal = dists.makeMarginal;
        var Mixture = dists.makeMixture;
        var Multinomial = dists.makeMultinomial;
        var MultivariateBernoulli = dists.makeMultivariateBernoulli;
        var MultivariateGaussian = dists.makeMultivariateGaussian;
        var Poisson = dists.makePoisson;
        var RandomInteger = dists.makeRandomInteger;
        var SampleBasedMarginal = dists.makeSampleBasedMarginal;
        var TensorGaussian = dists.makeTensorGaussian;
        var TensorLaplace = dists.makeTensorLaplace;
        var Uniform = dists.makeUniform;
        var uniformDraw = function uniformDraw(globalStore, _k346, _address27, arg) {
            var _currentAddress = _address27;
            _addr.save(_globalCurrentAddress, _address27);
            var _k349 = function (globalStore, vs) {
                _addr.save(_globalCurrentAddress, _currentAddress);
                return function () {
                    return ad.scalar.eq(vs.length, 0) ? _k346(globalStore, undefined) : RandomInteger(globalStore, function (globalStore, _result348) {
                        _addr.save(_globalCurrentAddress, _currentAddress);
                        return function () {
                            return sample(globalStore, function (globalStore, _result347) {
                                _addr.save(_globalCurrentAddress, _currentAddress);
                                return function () {
                                    return _k346(globalStore, vs[_result347]);
                                };
                            }, _address27.concat('_53'), _result348);
                        };
                    }, _address27.concat('_52'), { n: vs.length });
                };
            };
            return function () {
                return util.isObject(arg) ? _k349(globalStore, arg.vs) : _k349(globalStore, arg);
            };
        };
        var constF = function constF(globalStore, _k301, _address46, f) {
            var _currentAddress = _address46;
            _addr.save(_globalCurrentAddress, _address46);
            return function () {
                return _k301(globalStore, function (globalStore, _k302, _address47) {
                    var _currentAddress = _address47;
                    _addr.save(_globalCurrentAddress, _address47);
                    return function () {
                        return _k302(globalStore, f);
                    };
                });
            };
        };
        var error = function error(globalStore, _k174, _address121, msg) {
            var _currentAddress = _address121;
            _addr.save(_globalCurrentAddress, _address121);
            return function () {
                return _k174(globalStore, util.error(msg));
            };
        };
        var SampleGuide = function SampleGuide(globalStore, _k170, _address125, wpplFn, options) {
            var _currentAddress = _address125;
            _addr.save(_globalCurrentAddress, _address125);
            return function () {
                return ForwardSample(globalStore, _k170, _address125.concat('_154'), wpplFn, _.assign({ guide: !0 }, _.omit(options, 'guide')));
            };
        };
        var OptimizeThenSample = function OptimizeThenSample(globalStore, _k168, _address126, wpplFn, options) {
            var _currentAddress = _address126;
            _addr.save(_globalCurrentAddress, _address126);
            return function () {
                return Optimize(globalStore, function (globalStore, _dummy169) {
                    _addr.save(_globalCurrentAddress, _currentAddress);
                    var opts = _.pick(options, 'samples', 'onlyMAP', 'verbose');
                    return function () {
                        return SampleGuide(globalStore, _k168, _address126.concat('_156'), wpplFn, opts);
                    };
                }, _address126.concat('_155'), wpplFn, _.omit(options, 'samples', 'onlyMAP'));
            };
        };
        var AISforInfer = function AISforInfer(globalStore, _k164, _address127, wpplFn, options) {
            var _currentAddress = _address127;
            _addr.save(_globalCurrentAddress, _address127);
            return function () {
                return constF(globalStore, function (globalStore, _result167) {
                    _addr.save(_globalCurrentAddress, _currentAddress);
                    return function () {
                        return Infer(globalStore, function (globalStore, dummyMarginal) {
                            _addr.save(_globalCurrentAddress, _currentAddress);
                            return function () {
                                return AIS(globalStore, function (globalStore, _result166) {
                                    _addr.save(_globalCurrentAddress, _currentAddress);
                                    var _dummy165 = _.assign(dummyMarginal, { normalizationConstant: _result166 });
                                    return function () {
                                        return _k164(globalStore, dummyMarginal);
                                    };
                                }, _address127.concat('_159'), wpplFn, options);
                            };
                        }, _address127.concat('_158'), _result167);
                    };
                }, _address127.concat('_157'), !0);
            };
        };
        var DefaultInfer = function DefaultInfer(globalStore, _k154, _address128, wpplFn, options) {
            var _currentAddress = _address128;
            _addr.save(_globalCurrentAddress, _address128);
            var _dummy163 = util.mergeDefaults(options, {}, 'Infer');
            var maxEnumTreeSize = 200000;
            var minSampleRate = 250;
            var samples = 1000;
            return function () {
                return Enumerate(globalStore, function (globalStore, enumResult) {
                    _addr.save(_globalCurrentAddress, _currentAddress);
                    var _k162 = function (globalStore, _dummy161) {
                        _addr.save(_globalCurrentAddress, _currentAddress);
                        var _dummy160 = console.log('Using "rejection"');
                        return function () {
                            return Rejection(globalStore, function (globalStore, rejResult) {
                                _addr.save(_globalCurrentAddress, _currentAddress);
                                return function () {
                                    return rejResult instanceof Error ? function (globalStore, _dummy159) {
                                        _addr.save(_globalCurrentAddress, _currentAddress);
                                        return function () {
                                            return CheckSampleAfterFactor(globalStore, function (globalStore, hasSampleAfterFactor) {
                                                _addr.save(_globalCurrentAddress, _currentAddress);
                                                var _k157 = function (globalStore, _dummy156) {
                                                    _addr.save(_globalCurrentAddress, _currentAddress);
                                                    var _dummy155 = console.log('Using "MCMC"');
                                                    return function () {
                                                        return MCMC(globalStore, _k154, _address128.concat('_166'), wpplFn, { samples: samples });
                                                    };
                                                };
                                                return function () {
                                                    return hasSampleAfterFactor ? function (globalStore, _dummy158) {
                                                        _addr.save(_globalCurrentAddress, _currentAddress);
                                                        return function () {
                                                            return SMC(globalStore, function (globalStore, smcResult) {
                                                                _addr.save(_globalCurrentAddress, _currentAddress);
                                                                return function () {
                                                                    return dists.isDist(smcResult) ? _k154(globalStore, smcResult) : smcResult instanceof Error ? _k157(globalStore, console.log(ad.scalar.add(smcResult.message, '..quit SMC'))) : error(globalStore, _k157, _address128.concat('_165'), 'Invalid return value from SMC');
                                                                };
                                                            }, _address128.concat('_164'), wpplFn, {
                                                                throwOnError: !1,
                                                                particles: samples
                                                            });
                                                        };
                                                    }(globalStore, console.log('Using "SMC" (interleaving samples and factors detected)')) : _k157(globalStore, undefined);
                                                };
                                            }, _address128.concat('_163'), wpplFn);
                                        };
                                    }(globalStore, console.log(ad.scalar.add(rejResult.message, '..quit rejection'))) : dists.isDist(rejResult) ? _k154(globalStore, rejResult) : error(globalStore, _k154, _address128.concat('_167'), 'Invalid return value from rejection');
                                };
                            }, _address128.concat('_162'), wpplFn, {
                                minSampleRate: minSampleRate,
                                throwOnError: !1,
                                samples: samples
                            });
                        };
                    };
                    return function () {
                        return dists.isDist(enumResult) ? _k154(globalStore, enumResult) : enumResult instanceof Error ? _k162(globalStore, console.log(ad.scalar.add(enumResult.message, '..quit enumerate'))) : error(globalStore, _k162, _address128.concat('_161'), 'Invalid return value from enumerate');
                    };
                }, _address128.concat('_160'), wpplFn, {
                    maxEnumTreeSize: maxEnumTreeSize,
                    maxRuntimeInMS: 5000,
                    throwOnError: !1,
                    strategy: 'depthFirst'
                });
            };
        };
        var Infer = function Infer(globalStore, _k147, _address129, options, maybeFn) {
            var _currentAddress = _address129;
            _addr.save(_globalCurrentAddress, _address129);
            var _k153 = function (globalStore, wpplFn) {
                _addr.save(_globalCurrentAddress, _currentAddress);
                var _k152 = function (globalStore, _dummy151) {
                    _addr.save(_globalCurrentAddress, _currentAddress);
                    var methodMap = {
                        SMC: SMC,
                        MCMC: MCMC,
                        PMCMC: PMCMC,
                        asyncPF: AsyncPF,
                        rejection: Rejection,
                        enumerate: Enumerate,
                        incrementalMH: IncrementalMH,
                        forward: ForwardSample,
                        optimize: OptimizeThenSample,
                        AIS: AISforInfer,
                        defaultInfer: DefaultInfer
                    };
                    var _k150 = function (globalStore, methodName) {
                        _addr.save(_globalCurrentAddress, _currentAddress);
                        var _k149 = function (globalStore, _dummy148) {
                            _addr.save(_globalCurrentAddress, _currentAddress);
                            var method = methodMap[methodName];
                            return function () {
                                return method(globalStore, _k147, _address129.concat('_170'), wpplFn, _.omit(options, 'method', 'model'));
                            };
                        };
                        return function () {
                            return _.has(methodMap, methodName) ? _k149(globalStore, undefined) : function (globalStore, methodNames) {
                                _addr.save(_globalCurrentAddress, _currentAddress);
                                var msg = ad.scalar.add(ad.scalar.add(ad.scalar.add(ad.scalar.add('Infer: \'', methodName), '\' is not a valid method. The following methods are available: '), methodNames.join(', ')), '.');
                                return function () {
                                    return error(globalStore, _k149, _address129.concat('_169'), msg);
                                };
                            }(globalStore, _.keys(methodMap));
                        };
                    };
                    return function () {
                        return options.method ? _k150(globalStore, options.method) : _k150(globalStore, 'defaultInfer');
                    };
                };
                return function () {
                    return _.isFunction(wpplFn) ? _k152(globalStore, undefined) : error(globalStore, _k152, _address129.concat('_168'), 'Infer: a model was not specified.');
                };
            };
            return function () {
                return util.isObject(options) ? maybeFn ? _k153(globalStore, maybeFn) : _k153(globalStore, options.model) : _k153(globalStore, options);
            };
        };
        return function () {
            return require(globalStore, function (globalStore, priors) {
                _addr.save(_globalCurrentAddress, _currentAddress);
                var modelAnalysis = function modelAnalysis(globalStore, _k1, _address164) {
                    var _currentAddress = _address164;
                    _addr.save(_globalCurrentAddress, _address164);
                    return function () {
                        return mapData(globalStore, _k1, _address164.concat('_274'), { data: priors }, function (globalStore, _k2, _address165, datum) {
                            var _currentAddress = _address165;
                            _addr.save(_globalCurrentAddress, _address165);
                            var alpha = 1;
                            var statePrior = function statePrior(globalStore, _k24, _address166) {
                                var _currentAddress = _address166;
                                _addr.save(_globalCurrentAddress, _address166);
                                return function () {
                                    return Categorical(globalStore, _k24, _address166.concat('_256'), {
                                        ps: [
                                            datum.Mean_Prior,
                                            ad.scalar.sub(1, datum.Mean_Prior),
                                            0.5,
                                            0.5
                                        ],
                                        vs: [
                                            {
                                                kale: !0,
                                                else: !1
                                            },
                                            {
                                                kale: !0,
                                                else: !0
                                            },
                                            {
                                                kale: !1,
                                                else: !0
                                            },
                                            {
                                                kale: !1,
                                                else: !1
                                            }
                                        ]
                                    });
                                };
                            };
                            var cost = {
                                kale: 0,
                                nkale: 0,
                                kale_else: 0,
                                nothing: 0
                            };
                            var utterancePrior = function utterancePrior(globalStore, _k23, _address167) {
                                var _currentAddress = _address167;
                                _addr.save(_globalCurrentAddress, _address167);
                                return function () {
                                    return uniformDraw(globalStore, _k23, _address167.concat('_257'), [
                                        'kale',
                                        'kale_else',
                                        'nkale',
                                        'nothing'
                                    ]);
                                };
                            };
                            var qudFns = {
                                polar: function (globalStore, _k21, _address168, state) {
                                    var _currentAddress = _address168;
                                    _addr.save(_globalCurrentAddress, _address168);
                                    return function () {
                                        return _k21(globalStore, { kale: state.kale });
                                    };
                                },
                                exhaustive: function (globalStore, _k22, _address169, state) {
                                    var _currentAddress = _address169;
                                    _addr.save(_globalCurrentAddress, _address169);
                                    return function () {
                                        return _k22(globalStore, state);
                                    };
                                }
                            };
                            return function () {
                                return cache(globalStore, function (globalStore, speaker) {
                                    _addr.save(_globalCurrentAddress, _currentAddress);
                                    return function () {
                                        return cache(globalStore, function (globalStore, pragmaticListener) {
                                            _addr.save(_globalCurrentAddress, _currentAddress);
                                            return function () {
                                                return pragmaticListener(globalStore, function (globalStore, _result4) {
                                                    _addr.save(_globalCurrentAddress, _currentAddress);
                                                    var _dummy3 = console.log(_result4);
                                                    return function () {
                                                        return _k2(globalStore, console.log(datum.topic));
                                                    };
                                                }, _address165.concat('_273'), 'kale', 'exhaustive');
                                            };
                                        }, _address165.concat('_272'), function (globalStore, _k5, _address177, utt, qud) {
                                            var _currentAddress = _address177;
                                            _addr.save(_globalCurrentAddress, _address177);
                                            return function () {
                                                return Infer(globalStore, _k5, _address177.concat('_271'), { method: 'enumerate' }, function (globalStore, _k6, _address178) {
                                                    var _currentAddress = _address178;
                                                    _addr.save(_globalCurrentAddress, _address178);
                                                    return function () {
                                                        return statePrior(globalStore, function (globalStore, _result9) {
                                                            _addr.save(_globalCurrentAddress, _currentAddress);
                                                            return function () {
                                                                return sample(globalStore, function (globalStore, state) {
                                                                    _addr.save(_globalCurrentAddress, _currentAddress);
                                                                    return function () {
                                                                        return speaker(globalStore, function (globalStore, _result8) {
                                                                            _addr.save(_globalCurrentAddress, _currentAddress);
                                                                            return function () {
                                                                                return observe(globalStore, function (globalStore, _dummy7) {
                                                                                    _addr.save(_globalCurrentAddress, _currentAddress);
                                                                                    return function () {
                                                                                        return _k6(globalStore, { state: state });
                                                                                    };
                                                                                }, _address178.concat('_270'), _result8, utt);
                                                                            };
                                                                        }, _address178.concat('_269'), state, qud);
                                                                    };
                                                                }, _address178.concat('_268'), _result9);
                                                            };
                                                        }, _address178.concat('_267'));
                                                    };
                                                });
                                            };
                                        });
                                    };
                                }, _address165.concat('_266'), function (globalStore, _k10, _address174, state, qud) {
                                    var _currentAddress = _address174;
                                    _addr.save(_globalCurrentAddress, _address174);
                                    var qudFn = qudFns[qud];
                                    return function () {
                                        return Infer(globalStore, _k10, _address174.concat('_265'), { method: 'enumerate' }, function (globalStore, _k11, _address175) {
                                            var _currentAddress = _address175;
                                            _addr.save(_globalCurrentAddress, _address175);
                                            return function () {
                                                return utterancePrior(globalStore, function (globalStore, utt) {
                                                    _addr.save(_globalCurrentAddress, _currentAddress);
                                                    return function () {
                                                        return Infer(globalStore, function (globalStore, projectedListener) {
                                                            _addr.save(_globalCurrentAddress, _currentAddress);
                                                            return function () {
                                                                return qudFn(globalStore, function (globalStore, _result13) {
                                                                    _addr.save(_globalCurrentAddress, _currentAddress);
                                                                    return function () {
                                                                        return factor(globalStore, function (globalStore, _dummy12) {
                                                                            _addr.save(_globalCurrentAddress, _currentAddress);
                                                                            return function () {
                                                                                return _k11(globalStore, utt);
                                                                            };
                                                                        }, _address175.concat('_264'), ad.scalar.mul(alpha, ad.scalar.sub(projectedListener.score(_result13), cost[utt])));
                                                                    };
                                                                }, _address175.concat('_263'), state);
                                                            };
                                                        }, _address175.concat('_262'), { method: 'enumerate' }, function (globalStore, _k14, _address176) {
                                                            var _currentAddress = _address176;
                                                            _addr.save(_globalCurrentAddress, _address176);
                                                            return function () {
                                                                return literalListener(globalStore, function (globalStore, _result16) {
                                                                    _addr.save(_globalCurrentAddress, _currentAddress);
                                                                    return function () {
                                                                        return sample(globalStore, function (globalStore, _result15) {
                                                                            _addr.save(_globalCurrentAddress, _currentAddress);
                                                                            return function () {
                                                                                return qudFn(globalStore, _k14, _address176.concat('_261'), _result15);
                                                                            };
                                                                        }, _address176.concat('_260'), _result16);
                                                                    };
                                                                }, _address176.concat('_259'), utt);
                                                            };
                                                        });
                                                    };
                                                }, _address175.concat('_258'));
                                            };
                                        });
                                    };
                                });
                            };
                        });
                    };
                };
                return function () {
                    return modelAnalysis(globalStore, _k0, _address0.concat('_275'));
                };
            }, _address0.concat('_255'), '../results/data/models/priors.json');
        };
    });
});

webppl.runEvaled(main, __runner__, {}, {}, topK, '');