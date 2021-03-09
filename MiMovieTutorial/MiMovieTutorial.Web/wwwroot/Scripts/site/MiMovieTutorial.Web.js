﻿var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var LanguageColumns = /** @class */ (function () {
            function LanguageColumns() {
            }
            LanguageColumns.columnsKey = 'Administration.Language';
            return LanguageColumns;
        }());
        Administration.LanguageColumns = LanguageColumns;
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var RoleColumns = /** @class */ (function () {
            function RoleColumns() {
            }
            RoleColumns.columnsKey = 'Administration.Role';
            return RoleColumns;
        }());
        Administration.RoleColumns = RoleColumns;
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserColumns = /** @class */ (function () {
            function UserColumns() {
            }
            UserColumns.columnsKey = 'Administration.User';
            return UserColumns;
        }());
        Administration.UserColumns = UserColumns;
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var BasicSamplesService;
        (function (BasicSamplesService) {
            BasicSamplesService.baseUrl = 'BasicSamples/BasicSamples';
            [
                'OrdersByShipper',
                'OrderBulkAction'
            ].forEach(function (x) {
                BasicSamplesService[x] = function (r, s, o) {
                    return Q.serviceRequest(BasicSamplesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BasicSamplesService = BasicSamples.BasicSamplesService || (BasicSamples.BasicSamplesService = {}));
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var ChangingLookupTextForm = /** @class */ (function (_super) {
            __extends(ChangingLookupTextForm, _super);
            function ChangingLookupTextForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangingLookupTextForm.init) {
                    ChangingLookupTextForm.init = true;
                    var s = Serenity;
                    var w0 = BasicSamples.ChangingLookupTextEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(ChangingLookupTextForm, [
                        'ProductID', w0,
                        'UnitPrice', w1,
                        'Quantity', w2,
                        'Discount', w1
                    ]);
                }
                return _this;
            }
            ChangingLookupTextForm.formKey = 'BasicSamples.ChangingLookupText';
            return ChangingLookupTextForm;
        }(Serenity.PrefixedContext));
        BasicSamples.ChangingLookupTextForm = ChangingLookupTextForm;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var CustomerGrossSalesColumns = /** @class */ (function () {
            function CustomerGrossSalesColumns() {
            }
            CustomerGrossSalesColumns.columnsKey = 'BasicSamples.CustomerGrossSales';
            return CustomerGrossSalesColumns;
        }());
        BasicSamples.CustomerGrossSalesColumns = CustomerGrossSalesColumns;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var CustomerGrossSalesService;
        (function (CustomerGrossSalesService) {
            CustomerGrossSalesService.baseUrl = 'BasicSamples/CustomerGrossSales';
            [
                'List'
            ].forEach(function (x) {
                CustomerGrossSalesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerGrossSalesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerGrossSalesService = BasicSamples.CustomerGrossSalesService || (BasicSamples.CustomerGrossSalesService = {}));
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleColumns = /** @class */ (function () {
            function DragDropSampleColumns() {
            }
            DragDropSampleColumns.columnsKey = 'BasicSamples.DragDropSample';
            return DragDropSampleColumns;
        }());
        BasicSamples.DragDropSampleColumns = DragDropSampleColumns;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleForm = /** @class */ (function (_super) {
            __extends(DragDropSampleForm, _super);
            function DragDropSampleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DragDropSampleForm.init) {
                    DragDropSampleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(DragDropSampleForm, [
                        'Title', w0
                    ]);
                }
                return _this;
            }
            DragDropSampleForm.formKey = 'BasicSamples.DragDropSample';
            return DragDropSampleForm;
        }(Serenity.PrefixedContext));
        BasicSamples.DragDropSampleForm = DragDropSampleForm;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleRow;
        (function (DragDropSampleRow) {
            DragDropSampleRow.idProperty = 'Id';
            DragDropSampleRow.nameProperty = 'Title';
            DragDropSampleRow.localTextPrefix = 'Northwind.DragDropSample';
            DragDropSampleRow.deletePermission = 'Northwind:General';
            DragDropSampleRow.insertPermission = 'Northwind:General';
            DragDropSampleRow.readPermission = 'Northwind:General';
            DragDropSampleRow.updatePermission = 'Northwind:General';
        })(DragDropSampleRow = BasicSamples.DragDropSampleRow || (BasicSamples.DragDropSampleRow = {}));
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleService;
        (function (DragDropSampleService) {
            DragDropSampleService.baseUrl = 'BasicSamples/DragDropSample';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DragDropSampleService[x] = function (r, s, o) {
                    return Q.serviceRequest(DragDropSampleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DragDropSampleService = BasicSamples.DragDropSampleService || (BasicSamples.DragDropSampleService = {}));
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var FilteredLookupInDetailForm = /** @class */ (function (_super) {
            __extends(FilteredLookupInDetailForm, _super);
            function FilteredLookupInDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FilteredLookupInDetailForm.init) {
                    FilteredLookupInDetailForm.init = true;
                    var s = Serenity;
                    var w0 = MiMovieTutorial.Northwind.CustomerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.LookupEditor;
                    var w3 = BasicSamples.FilteredLookupDetailEditor;
                    Q.initFormType(FilteredLookupInDetailForm, [
                        'CustomerID', w0,
                        'OrderDate', w1,
                        'CategoryID', w2,
                        'DetailList', w3
                    ]);
                }
                return _this;
            }
            FilteredLookupInDetailForm.formKey = 'BasicSamples.FilteredLookupInDetail';
            return FilteredLookupInDetailForm;
        }(Serenity.PrefixedContext));
        BasicSamples.FilteredLookupInDetailForm = FilteredLookupInDetailForm;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var HardcodedValuesForm = /** @class */ (function (_super) {
            __extends(HardcodedValuesForm, _super);
            function HardcodedValuesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!HardcodedValuesForm.init) {
                    HardcodedValuesForm.init = true;
                    var s = Serenity;
                    var w0 = BasicSamples.HardcodedValuesEditor;
                    Q.initFormType(HardcodedValuesForm, [
                        'SomeValue', w0
                    ]);
                }
                return _this;
            }
            HardcodedValuesForm.formKey = 'BasicSamples.HarcodedValues';
            return HardcodedValuesForm;
        }(Serenity.PrefixedContext));
        BasicSamples.HardcodedValuesForm = HardcodedValuesForm;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var InlineImageInGridColumns = /** @class */ (function () {
            function InlineImageInGridColumns() {
            }
            InlineImageInGridColumns.columnsKey = 'BasicSamples.InlineImageInGrid';
            return InlineImageInGridColumns;
        }());
        BasicSamples.InlineImageInGridColumns = InlineImageInGridColumns;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var LookupFilterByMultipleForm = /** @class */ (function (_super) {
            __extends(LookupFilterByMultipleForm, _super);
            function LookupFilterByMultipleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LookupFilterByMultipleForm.init) {
                    LookupFilterByMultipleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.ImageUploadEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.LookupEditor;
                    var w4 = BasicSamples.ProduceSeafoodCategoryEditor;
                    var w5 = s.DecimalEditor;
                    var w6 = s.IntegerEditor;
                    Q.initFormType(LookupFilterByMultipleForm, [
                        'ProductName', w0,
                        'ProductImage', w1,
                        'Discontinued', w2,
                        'SupplierID', w3,
                        'CategoryID', w4,
                        'QuantityPerUnit', w0,
                        'UnitPrice', w5,
                        'UnitsInStock', w6,
                        'UnitsOnOrder', w6,
                        'ReorderLevel', w6
                    ]);
                }
                return _this;
            }
            LookupFilterByMultipleForm.formKey = 'BasicSamples.LookupFilterByMultiple';
            return LookupFilterByMultipleForm;
        }(Serenity.PrefixedContext));
        BasicSamples.LookupFilterByMultipleForm = LookupFilterByMultipleForm;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var PopulateLinkedDataForm = /** @class */ (function (_super) {
            __extends(PopulateLinkedDataForm, _super);
            function PopulateLinkedDataForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PopulateLinkedDataForm.init) {
                    PopulateLinkedDataForm.init = true;
                    var s = Serenity;
                    var w0 = MiMovieTutorial.Northwind.CustomerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.LookupEditor;
                    var w4 = MiMovieTutorial.Northwind.OrderDetailsEditor;
                    Q.initFormType(PopulateLinkedDataForm, [
                        'CustomerID', w0,
                        'CustomerContactName', w1,
                        'CustomerContactTitle', w1,
                        'CustomerCity', w1,
                        'CustomerRegion', w1,
                        'CustomerCountry', w1,
                        'CustomerPhone', w1,
                        'CustomerFax', w1,
                        'OrderDate', w2,
                        'RequiredDate', w2,
                        'EmployeeID', w3,
                        'DetailList', w4
                    ]);
                }
                return _this;
            }
            PopulateLinkedDataForm.formKey = 'BasicSamples.PopulateLinkedData';
            return PopulateLinkedDataForm;
        }(Serenity.PrefixedContext));
        BasicSamples.PopulateLinkedDataForm = PopulateLinkedDataForm;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportForm = /** @class */ (function (_super) {
            __extends(ProductExcelImportForm, _super);
            function ProductExcelImportForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductExcelImportForm.init) {
                    ProductExcelImportForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    Q.initFormType(ProductExcelImportForm, [
                        'FileName', w0
                    ]);
                }
                return _this;
            }
            ProductExcelImportForm.formKey = 'BasicSamples.ProductExcelImport';
            return ProductExcelImportForm;
        }(Serenity.PrefixedContext));
        BasicSamples.ProductExcelImportForm = ProductExcelImportForm;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportService;
        (function (ProductExcelImportService) {
            ProductExcelImportService.baseUrl = 'BasicSamples/ProductExcelImport';
            [
                'ExcelImport'
            ].forEach(function (x) {
                ProductExcelImportService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductExcelImportService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductExcelImportService = BasicSamples.ProductExcelImportService || (BasicSamples.ProductExcelImportService = {}));
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var StaticTextBlockForm = /** @class */ (function (_super) {
            __extends(StaticTextBlockForm, _super);
            function StaticTextBlockForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!StaticTextBlockForm.init) {
                    StaticTextBlockForm.init = true;
                    var s = Serenity;
                    var w0 = MiMovieTutorial.StaticTextBlock;
                    var w1 = s.StringEditor;
                    Q.initFormType(StaticTextBlockForm, [
                        'StaticText', w0,
                        'SomeInput', w1,
                        'HtmlList', w0,
                        'FromLocalText', w0,
                        'DisplayFieldValue', w0
                    ]);
                }
                return _this;
            }
            StaticTextBlockForm.formKey = 'BasicSamples.StaticTextBlock';
            return StaticTextBlockForm;
        }(Serenity.PrefixedContext));
        BasicSamples.StaticTextBlockForm = StaticTextBlockForm;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            UserPreferenceRow.deletePermission = '';
            UserPreferenceRow.insertPermission = '';
            UserPreferenceRow.readPermission = '';
            UserPreferenceRow.updatePermission = '';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = MiMovieTutorial.Common || (MiMovieTutorial.Common = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = MiMovieTutorial.Common || (MiMovieTutorial.Common = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var AlumnosCarrerasColumns = /** @class */ (function () {
            function AlumnosCarrerasColumns() {
            }
            AlumnosCarrerasColumns.columnsKey = 'INSUDE.AlumnosCarreras';
            return AlumnosCarrerasColumns;
        }());
        INSUDE.AlumnosCarrerasColumns = AlumnosCarrerasColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var AlumnosCarrerasForm = /** @class */ (function (_super) {
            __extends(AlumnosCarrerasForm, _super);
            function AlumnosCarrerasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AlumnosCarrerasForm.init) {
                    AlumnosCarrerasForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(AlumnosCarrerasForm, [
                        'IdAlumno', w0,
                        'IdTitulo', w0,
                        'IdPensum', w0,
                        'IdTituloNivel', w0,
                        'NoRegistro', w1,
                        'Fecha', w2,
                        'Becado', w1,
                        'FechaGraduacion', w2,
                        'IdPromocion', w0,
                        'Promocion', w1,
                        'Libro', w0,
                        'Folio', w0,
                        'Numero', w0,
                        'Estado', w1,
                        'CreateDate', w2,
                        'LastUpdatedAt', w2
                    ]);
                }
                return _this;
            }
            AlumnosCarrerasForm.formKey = 'INSUDE.AlumnosCarreras';
            return AlumnosCarrerasForm;
        }(Serenity.PrefixedContext));
        INSUDE.AlumnosCarrerasForm = AlumnosCarrerasForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var AlumnosCarrerasRow;
        (function (AlumnosCarrerasRow) {
            AlumnosCarrerasRow.idProperty = 'IdAlumnoCarrera';
            AlumnosCarrerasRow.nameProperty = 'NoRegistro';
            AlumnosCarrerasRow.localTextPrefix = 'INSUDE.AlumnosCarreras';
            AlumnosCarrerasRow.deletePermission = 'Administration:General';
            AlumnosCarrerasRow.insertPermission = 'Administration:General';
            AlumnosCarrerasRow.readPermission = 'Administration:General';
            AlumnosCarrerasRow.updatePermission = 'Administration:General';
        })(AlumnosCarrerasRow = INSUDE.AlumnosCarrerasRow || (INSUDE.AlumnosCarrerasRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var AlumnosCarrerasService;
        (function (AlumnosCarrerasService) {
            AlumnosCarrerasService.baseUrl = 'INSUDE/AlumnosCarreras';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AlumnosCarrerasService[x] = function (r, s, o) {
                    return Q.serviceRequest(AlumnosCarrerasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AlumnosCarrerasService = INSUDE.AlumnosCarrerasService || (INSUDE.AlumnosCarrerasService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var AlumnosColumns = /** @class */ (function () {
            function AlumnosColumns() {
            }
            AlumnosColumns.columnsKey = 'INSUDE.Alumnos';
            return AlumnosColumns;
        }());
        INSUDE.AlumnosColumns = AlumnosColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var AlumnosFamiliaresColumns = /** @class */ (function () {
            function AlumnosFamiliaresColumns() {
            }
            AlumnosFamiliaresColumns.columnsKey = 'INSUDE.AlumnosFamiliares';
            return AlumnosFamiliaresColumns;
        }());
        INSUDE.AlumnosFamiliaresColumns = AlumnosFamiliaresColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var AlumnosFamiliaresForm = /** @class */ (function (_super) {
            __extends(AlumnosFamiliaresForm, _super);
            function AlumnosFamiliaresForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AlumnosFamiliaresForm.init) {
                    AlumnosFamiliaresForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(AlumnosFamiliaresForm, [
                        'IdAlumno', w0,
                        'Parentesco', w1,
                        'Nombres', w1,
                        'Telefono', w1,
                        'CreateUser', w1,
                        'CreateDate', w2
                    ]);
                }
                return _this;
            }
            AlumnosFamiliaresForm.formKey = 'INSUDE.AlumnosFamiliares';
            return AlumnosFamiliaresForm;
        }(Serenity.PrefixedContext));
        INSUDE.AlumnosFamiliaresForm = AlumnosFamiliaresForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var AlumnosFamiliaresRow;
        (function (AlumnosFamiliaresRow) {
            AlumnosFamiliaresRow.idProperty = 'IdAlumnoFamiliar';
            AlumnosFamiliaresRow.nameProperty = 'Parentesco';
            AlumnosFamiliaresRow.localTextPrefix = 'INSUDE.AlumnosFamiliares';
            AlumnosFamiliaresRow.deletePermission = 'Administration:General';
            AlumnosFamiliaresRow.insertPermission = 'Administration:General';
            AlumnosFamiliaresRow.readPermission = 'Administration:General';
            AlumnosFamiliaresRow.updatePermission = 'Administration:General';
        })(AlumnosFamiliaresRow = INSUDE.AlumnosFamiliaresRow || (INSUDE.AlumnosFamiliaresRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var AlumnosFamiliaresService;
        (function (AlumnosFamiliaresService) {
            AlumnosFamiliaresService.baseUrl = 'INSUDE/AlumnosFamiliares';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AlumnosFamiliaresService[x] = function (r, s, o) {
                    return Q.serviceRequest(AlumnosFamiliaresService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AlumnosFamiliaresService = INSUDE.AlumnosFamiliaresService || (INSUDE.AlumnosFamiliaresService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var AlumnosForm = /** @class */ (function (_super) {
            __extends(AlumnosForm, _super);
            function AlumnosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AlumnosForm.init) {
                    AlumnosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.IntegerEditor;
                    Q.initFormType(AlumnosForm, [
                        'Nombres', w0,
                        'Apellidos', w0,
                        'Sexo', w1,
                        'Matricula', w0,
                        'IdRango', w1,
                        'TipoIdentificacion', w0,
                        'Identificacion', w0,
                        'EstadoCivil', w1,
                        'IdPais', w1,
                        'IdNacionalidad', w1,
                        'IdInstitucion', w1,
                        'IdDependencia', w1,
                        'lstCarreras', w1,
                        'FechaNacimiento', w2,
                        'LugarNacimiento', w0,
                        'FechaRegistro', w2,
                        'FechaIngreso', w2,
                        'CorreoElectronico', w0,
                        'TelHogar', w0,
                        'TelCelular', w0,
                        'Observaciones', w0,
                        'Tipo', w0,
                        'Direccion', w0,
                        'Ciudad', w0,
                        'IdUsuario', w3,
                        'DireccionOficina', w0,
                        'Funcion', w0,
                        'TelOficina', w0,
                        'DpMatricula', w0,
                        'EcMatricula', w0,
                        'Estado', w0
                    ]);
                }
                return _this;
            }
            AlumnosForm.formKey = 'INSUDE.Alumnos';
            return AlumnosForm;
        }(Serenity.PrefixedContext));
        INSUDE.AlumnosForm = AlumnosForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var AlumnosRow;
        (function (AlumnosRow) {
            AlumnosRow.idProperty = 'IdAlumno';
            AlumnosRow.nameProperty = 'Nombres';
            AlumnosRow.localTextPrefix = 'INSUDE.Alumnos';
            AlumnosRow.deletePermission = 'Administration:General';
            AlumnosRow.insertPermission = 'Administration:General';
            AlumnosRow.readPermission = 'Administration:General';
            AlumnosRow.updatePermission = 'Administration:General';
        })(AlumnosRow = INSUDE.AlumnosRow || (INSUDE.AlumnosRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var AlumnosService;
        (function (AlumnosService) {
            AlumnosService.baseUrl = 'INSUDE/Alumnos';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AlumnosService[x] = function (r, s, o) {
                    return Q.serviceRequest(AlumnosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AlumnosService = INSUDE.AlumnosService || (INSUDE.AlumnosService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var CompaniaColumns = /** @class */ (function () {
            function CompaniaColumns() {
            }
            CompaniaColumns.columnsKey = 'INSUDE.Compania';
            return CompaniaColumns;
        }());
        INSUDE.CompaniaColumns = CompaniaColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var CompaniaForm = /** @class */ (function (_super) {
            __extends(CompaniaForm, _super);
            function CompaniaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CompaniaForm.init) {
                    CompaniaForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CompaniaForm, [
                        'Siglas', w0,
                        'Nombre', w0,
                        'Rnc', w0,
                        'Direccion', w0,
                        'Telefono', w0,
                        'Fax', w0,
                        'Logo', w0,
                        'Correo', w0,
                        'Website', w0
                    ]);
                }
                return _this;
            }
            CompaniaForm.formKey = 'INSUDE.Compania';
            return CompaniaForm;
        }(Serenity.PrefixedContext));
        INSUDE.CompaniaForm = CompaniaForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var CompaniaRow;
        (function (CompaniaRow) {
            CompaniaRow.idProperty = 'IdCompania';
            CompaniaRow.nameProperty = 'Siglas';
            CompaniaRow.localTextPrefix = 'INSUDE.Compania';
            CompaniaRow.lookupKey = 'INSUDE.Compania';
            function getLookup() {
                return Q.getLookup('INSUDE.Compania');
            }
            CompaniaRow.getLookup = getLookup;
            CompaniaRow.deletePermission = 'Administration:General';
            CompaniaRow.insertPermission = 'Administration:General';
            CompaniaRow.readPermission = 'Administration:General';
            CompaniaRow.updatePermission = 'Administration:General';
        })(CompaniaRow = INSUDE.CompaniaRow || (INSUDE.CompaniaRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var CompaniaService;
        (function (CompaniaService) {
            CompaniaService.baseUrl = 'INSUDE/Compania';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CompaniaService[x] = function (r, s, o) {
                    return Q.serviceRequest(CompaniaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CompaniaService = INSUDE.CompaniaService || (INSUDE.CompaniaService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var DependenciasColumns = /** @class */ (function () {
            function DependenciasColumns() {
            }
            DependenciasColumns.columnsKey = 'INSUDE.Dependencias';
            return DependenciasColumns;
        }());
        INSUDE.DependenciasColumns = DependenciasColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var DependenciasForm = /** @class */ (function (_super) {
            __extends(DependenciasForm, _super);
            function DependenciasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DependenciasForm.init) {
                    DependenciasForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(DependenciasForm, [
                        'Nombre', w0
                    ]);
                }
                return _this;
            }
            DependenciasForm.formKey = 'INSUDE.Dependencias';
            return DependenciasForm;
        }(Serenity.PrefixedContext));
        INSUDE.DependenciasForm = DependenciasForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var DependenciasRow;
        (function (DependenciasRow) {
            DependenciasRow.idProperty = 'IdDependencia';
            DependenciasRow.nameProperty = 'Nombre';
            DependenciasRow.localTextPrefix = 'INSUDE.Dependencias';
            DependenciasRow.lookupKey = 'INSUDE.Dependencias';
            function getLookup() {
                return Q.getLookup('INSUDE.Dependencias');
            }
            DependenciasRow.getLookup = getLookup;
            DependenciasRow.deletePermission = 'Administration:General';
            DependenciasRow.insertPermission = 'Administration:General';
            DependenciasRow.readPermission = 'Administration:General';
            DependenciasRow.updatePermission = 'Administration:General';
        })(DependenciasRow = INSUDE.DependenciasRow || (INSUDE.DependenciasRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var DependenciasService;
        (function (DependenciasService) {
            DependenciasService.baseUrl = 'INSUDE/Dependencias';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DependenciasService[x] = function (r, s, o) {
                    return Q.serviceRequest(DependenciasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DependenciasService = INSUDE.DependenciasService || (INSUDE.DependenciasService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var EscuelasColumns = /** @class */ (function () {
            function EscuelasColumns() {
            }
            EscuelasColumns.columnsKey = 'INSUDE.Escuelas';
            return EscuelasColumns;
        }());
        INSUDE.EscuelasColumns = EscuelasColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var EscuelasForm = /** @class */ (function (_super) {
            __extends(EscuelasForm, _super);
            function EscuelasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EscuelasForm.init) {
                    EscuelasForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(EscuelasForm, [
                        'IdInstitucion', w0,
                        'Nombre', w1,
                        'Siglas', w1,
                        'Direccion', w1,
                        'Telefono', w1,
                        'Contacto', w1,
                        'Estado', w1
                    ]);
                }
                return _this;
            }
            EscuelasForm.formKey = 'INSUDE.Escuelas';
            return EscuelasForm;
        }(Serenity.PrefixedContext));
        INSUDE.EscuelasForm = EscuelasForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var EscuelasRow;
        (function (EscuelasRow) {
            EscuelasRow.idProperty = 'IdEscuela';
            EscuelasRow.nameProperty = 'Nombre';
            EscuelasRow.localTextPrefix = 'INSUDE.Escuelas';
            EscuelasRow.deletePermission = 'Administration:General';
            EscuelasRow.insertPermission = 'Administration:General';
            EscuelasRow.readPermission = 'Administration:General';
            EscuelasRow.updatePermission = 'Administration:General';
        })(EscuelasRow = INSUDE.EscuelasRow || (INSUDE.EscuelasRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var EscuelasService;
        (function (EscuelasService) {
            EscuelasService.baseUrl = 'INSUDE/Escuelas';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EscuelasService[x] = function (r, s, o) {
                    return Q.serviceRequest(EscuelasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EscuelasService = INSUDE.EscuelasService || (INSUDE.EscuelasService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var EstadocivilColumns = /** @class */ (function () {
            function EstadocivilColumns() {
            }
            EstadocivilColumns.columnsKey = 'INSUDE.Estadocivil';
            return EstadocivilColumns;
        }());
        INSUDE.EstadocivilColumns = EstadocivilColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var EstadocivilForm = /** @class */ (function (_super) {
            __extends(EstadocivilForm, _super);
            function EstadocivilForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EstadocivilForm.init) {
                    EstadocivilForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(EstadocivilForm, [
                        'NomEstado', w0
                    ]);
                }
                return _this;
            }
            EstadocivilForm.formKey = 'INSUDE.Estadocivil';
            return EstadocivilForm;
        }(Serenity.PrefixedContext));
        INSUDE.EstadocivilForm = EstadocivilForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var EstadocivilRow;
        (function (EstadocivilRow) {
            EstadocivilRow.idProperty = 'CodEstado';
            EstadocivilRow.nameProperty = 'NomEstado';
            EstadocivilRow.localTextPrefix = 'INSUDE.Estadocivil';
            EstadocivilRow.lookupKey = 'INSUDE.Estadocivil';
            function getLookup() {
                return Q.getLookup('INSUDE.Estadocivil');
            }
            EstadocivilRow.getLookup = getLookup;
            EstadocivilRow.deletePermission = 'Administration:General';
            EstadocivilRow.insertPermission = 'Administration:General';
            EstadocivilRow.readPermission = 'Administration:General';
            EstadocivilRow.updatePermission = 'Administration:General';
        })(EstadocivilRow = INSUDE.EstadocivilRow || (INSUDE.EstadocivilRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var EstadocivilService;
        (function (EstadocivilService) {
            EstadocivilService.baseUrl = 'INSUDE/Estadocivil';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EstadocivilService[x] = function (r, s, o) {
                    return Q.serviceRequest(EstadocivilService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EstadocivilService = INSUDE.EstadocivilService || (INSUDE.EstadocivilService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var ExistencialmaColumns = /** @class */ (function () {
            function ExistencialmaColumns() {
            }
            ExistencialmaColumns.columnsKey = 'INSUDE.Existencialma';
            return ExistencialmaColumns;
        }());
        INSUDE.ExistencialmaColumns = ExistencialmaColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var ExistencialmaForm = /** @class */ (function (_super) {
            __extends(ExistencialmaForm, _super);
            function ExistencialmaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ExistencialmaForm.init) {
                    ExistencialmaForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(ExistencialmaForm, [
                        'CodPro', w0,
                        'Almacen', w0,
                        'Existencia', w1
                    ]);
                }
                return _this;
            }
            ExistencialmaForm.formKey = 'INSUDE.Existencialma';
            return ExistencialmaForm;
        }(Serenity.PrefixedContext));
        INSUDE.ExistencialmaForm = ExistencialmaForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var ExistencialmaRow;
        (function (ExistencialmaRow) {
            ExistencialmaRow.idProperty = 'Sec';
            ExistencialmaRow.localTextPrefix = 'INSUDE.Existencialma';
            ExistencialmaRow.deletePermission = 'Administration:General';
            ExistencialmaRow.insertPermission = 'Administration:General';
            ExistencialmaRow.readPermission = 'Administration:General';
            ExistencialmaRow.updatePermission = 'Administration:General';
        })(ExistencialmaRow = INSUDE.ExistencialmaRow || (INSUDE.ExistencialmaRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var ExistencialmaService;
        (function (ExistencialmaService) {
            ExistencialmaService.baseUrl = 'INSUDE/Existencialma';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ExistencialmaService[x] = function (r, s, o) {
                    return Q.serviceRequest(ExistencialmaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ExistencialmaService = INSUDE.ExistencialmaService || (INSUDE.ExistencialmaService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var FacultadesColumns = /** @class */ (function () {
            function FacultadesColumns() {
            }
            FacultadesColumns.columnsKey = 'INSUDE.Facultades';
            return FacultadesColumns;
        }());
        INSUDE.FacultadesColumns = FacultadesColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var FacultadesForm = /** @class */ (function (_super) {
            __extends(FacultadesForm, _super);
            function FacultadesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FacultadesForm.init) {
                    FacultadesForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(FacultadesForm, [
                        'IdCompania', w0,
                        'Nombre', w1
                    ]);
                }
                return _this;
            }
            FacultadesForm.formKey = 'INSUDE.Facultades';
            return FacultadesForm;
        }(Serenity.PrefixedContext));
        INSUDE.FacultadesForm = FacultadesForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var FacultadesRow;
        (function (FacultadesRow) {
            FacultadesRow.idProperty = 'IdInstitucion';
            FacultadesRow.nameProperty = 'Nombre';
            FacultadesRow.localTextPrefix = 'INSUDE.Facultades';
            FacultadesRow.lookupKey = 'INSUDE.Facultades';
            function getLookup() {
                return Q.getLookup('INSUDE.Facultades');
            }
            FacultadesRow.getLookup = getLookup;
            FacultadesRow.deletePermission = 'Administration:General';
            FacultadesRow.insertPermission = 'Administration:General';
            FacultadesRow.readPermission = 'Administration:General';
            FacultadesRow.updatePermission = 'Administration:General';
        })(FacultadesRow = INSUDE.FacultadesRow || (INSUDE.FacultadesRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var FacultadesService;
        (function (FacultadesService) {
            FacultadesService.baseUrl = 'INSUDE/Facultades';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FacultadesService[x] = function (r, s, o) {
                    return Q.serviceRequest(FacultadesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FacultadesService = INSUDE.FacultadesService || (INSUDE.FacultadesService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var IndicesColumns = /** @class */ (function () {
            function IndicesColumns() {
            }
            IndicesColumns.columnsKey = 'INSUDE.Indices';
            return IndicesColumns;
        }());
        INSUDE.IndicesColumns = IndicesColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var IndicesForm = /** @class */ (function (_super) {
            __extends(IndicesForm, _super);
            function IndicesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!IndicesForm.init) {
                    IndicesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(IndicesForm, [
                        'Literal', w0,
                        'Puntos', w1,
                        'Rango1', w1,
                        'Rango2', w1,
                        'CreateDate', w2,
                        'CreateUser', w0,
                        'Descripcion', w0
                    ]);
                }
                return _this;
            }
            IndicesForm.formKey = 'INSUDE.Indices';
            return IndicesForm;
        }(Serenity.PrefixedContext));
        INSUDE.IndicesForm = IndicesForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var IndicesRow;
        (function (IndicesRow) {
            IndicesRow.idProperty = 'IdIndice';
            IndicesRow.nameProperty = 'Literal';
            IndicesRow.localTextPrefix = 'INSUDE.Indices';
            IndicesRow.deletePermission = 'Administration:General';
            IndicesRow.insertPermission = 'Administration:General';
            IndicesRow.readPermission = 'Administration:General';
            IndicesRow.updatePermission = 'Administration:General';
        })(IndicesRow = INSUDE.IndicesRow || (INSUDE.IndicesRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var IndicesService;
        (function (IndicesService) {
            IndicesService.baseUrl = 'INSUDE/Indices';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                IndicesService[x] = function (r, s, o) {
                    return Q.serviceRequest(IndicesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(IndicesService = INSUDE.IndicesService || (INSUDE.IndicesService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var InstructoresColumns = /** @class */ (function () {
            function InstructoresColumns() {
            }
            InstructoresColumns.columnsKey = 'INSUDE.Instructores';
            return InstructoresColumns;
        }());
        INSUDE.InstructoresColumns = InstructoresColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var InstructoresForm = /** @class */ (function (_super) {
            __extends(InstructoresForm, _super);
            function InstructoresForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InstructoresForm.init) {
                    InstructoresForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(InstructoresForm, [
                        'Codigo', w0,
                        'Nombres', w0,
                        'Telefono', w0,
                        'NivelAcademico', w0,
                        'IdUsuario', w1,
                        'Estado', w0,
                        'CreateUser', w0,
                        'CreateDate', w2,
                        'Identificacion', w0,
                        'TipoIdentificacion', w0,
                        'LastUpdatedAt', w2,
                        'FechaIngreso', w2,
                        'CorreoElectronico', w0,
                        'Sexo', w0
                    ]);
                }
                return _this;
            }
            InstructoresForm.formKey = 'INSUDE.Instructores';
            return InstructoresForm;
        }(Serenity.PrefixedContext));
        INSUDE.InstructoresForm = InstructoresForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var InstructoresRow;
        (function (InstructoresRow) {
            InstructoresRow.idProperty = 'IdInstructor';
            InstructoresRow.nameProperty = 'Codigo';
            InstructoresRow.localTextPrefix = 'INSUDE.Instructores';
            InstructoresRow.deletePermission = 'Administration:General';
            InstructoresRow.insertPermission = 'Administration:General';
            InstructoresRow.readPermission = 'Administration:General';
            InstructoresRow.updatePermission = 'Administration:General';
        })(InstructoresRow = INSUDE.InstructoresRow || (INSUDE.InstructoresRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var InstructoresService;
        (function (InstructoresService) {
            InstructoresService.baseUrl = 'INSUDE/Instructores';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InstructoresService[x] = function (r, s, o) {
                    return Q.serviceRequest(InstructoresService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InstructoresService = INSUDE.InstructoresService || (INSUDE.InstructoresService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var MalmacenColumns = /** @class */ (function () {
            function MalmacenColumns() {
            }
            MalmacenColumns.columnsKey = 'INSUDE.Malmacen';
            return MalmacenColumns;
        }());
        INSUDE.MalmacenColumns = MalmacenColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var MalmacenForm = /** @class */ (function (_super) {
            __extends(MalmacenForm, _super);
            function MalmacenForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MalmacenForm.init) {
                    MalmacenForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(MalmacenForm, [
                        'Nomalmacen', w0
                    ]);
                }
                return _this;
            }
            MalmacenForm.formKey = 'INSUDE.Malmacen';
            return MalmacenForm;
        }(Serenity.PrefixedContext));
        INSUDE.MalmacenForm = MalmacenForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var MalmacenRow;
        (function (MalmacenRow) {
            MalmacenRow.idProperty = 'Almacenid';
            MalmacenRow.nameProperty = 'Nomalmacen';
            MalmacenRow.localTextPrefix = 'INSUDE.Malmacen';
            MalmacenRow.lookupKey = 'INSUEDE.Malmacen';
            function getLookup() {
                return Q.getLookup('INSUEDE.Malmacen');
            }
            MalmacenRow.getLookup = getLookup;
            MalmacenRow.deletePermission = 'Administration:General';
            MalmacenRow.insertPermission = 'Administration:General';
            MalmacenRow.readPermission = 'Administration:General';
            MalmacenRow.updatePermission = 'Administration:General';
        })(MalmacenRow = INSUDE.MalmacenRow || (INSUDE.MalmacenRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var MalmacenService;
        (function (MalmacenService) {
            MalmacenService.baseUrl = 'INSUDE/Malmacen';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MalmacenService[x] = function (r, s, o) {
                    return Q.serviceRequest(MalmacenService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MalmacenService = INSUDE.MalmacenService || (INSUDE.MalmacenService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var MateriasColumns = /** @class */ (function () {
            function MateriasColumns() {
            }
            MateriasColumns.columnsKey = 'INSUDE.Materias';
            return MateriasColumns;
        }());
        INSUDE.MateriasColumns = MateriasColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var MateriasForm = /** @class */ (function (_super) {
            __extends(MateriasForm, _super);
            function MateriasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MateriasForm.init) {
                    MateriasForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(MateriasForm, [
                        'IdEscuela', w0,
                        'Codigo', w1,
                        'Nombre', w1,
                        'Estado', w1,
                        'CreateUser', w1,
                        'CreateDate', w2,
                        'LastUpdatedAt', w2
                    ]);
                }
                return _this;
            }
            MateriasForm.formKey = 'INSUDE.Materias';
            return MateriasForm;
        }(Serenity.PrefixedContext));
        INSUDE.MateriasForm = MateriasForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var MateriasRow;
        (function (MateriasRow) {
            MateriasRow.idProperty = 'IdMateria';
            MateriasRow.nameProperty = 'Codigo';
            MateriasRow.localTextPrefix = 'INSUDE.Materias';
            MateriasRow.deletePermission = 'Administration:General';
            MateriasRow.insertPermission = 'Administration:General';
            MateriasRow.readPermission = 'Administration:General';
            MateriasRow.updatePermission = 'Administration:General';
        })(MateriasRow = INSUDE.MateriasRow || (INSUDE.MateriasRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var MateriasService;
        (function (MateriasService) {
            MateriasService.baseUrl = 'INSUDE/Materias';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MateriasService[x] = function (r, s, o) {
                    return Q.serviceRequest(MateriasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MateriasService = INSUDE.MateriasService || (INSUDE.MateriasService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var MproductColumns = /** @class */ (function () {
            function MproductColumns() {
            }
            MproductColumns.columnsKey = 'INSUDE.Mproduct';
            return MproductColumns;
        }());
        INSUDE.MproductColumns = MproductColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var MproductForm = /** @class */ (function (_super) {
            __extends(MproductForm, _super);
            function MproductForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MproductForm.init) {
                    MproductForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = INSUDE.ExistenciAlmaEditor;
                    Q.initFormType(MproductForm, [
                        'DesPro', w0,
                        'Precio', w1,
                        'ListaExistencia', w2
                    ]);
                }
                return _this;
            }
            MproductForm.formKey = 'INSUDE.Mproduct';
            return MproductForm;
        }(Serenity.PrefixedContext));
        INSUDE.MproductForm = MproductForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var MproductRow;
        (function (MproductRow) {
            MproductRow.idProperty = 'CodPro';
            MproductRow.nameProperty = 'DesPro';
            MproductRow.localTextPrefix = 'INSUDE.Mproduct';
            MproductRow.deletePermission = 'Administration:General';
            MproductRow.insertPermission = 'Administration:General';
            MproductRow.readPermission = 'Administration:General';
            MproductRow.updatePermission = 'Administration:General';
        })(MproductRow = INSUDE.MproductRow || (INSUDE.MproductRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var MproductService;
        (function (MproductService) {
            MproductService.baseUrl = 'INSUDE/Mproduct';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MproductService[x] = function (r, s, o) {
                    return Q.serviceRequest(MproductService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MproductService = INSUDE.MproductService || (INSUDE.MproductService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var NacionalidadColumns = /** @class */ (function () {
            function NacionalidadColumns() {
            }
            NacionalidadColumns.columnsKey = 'INSUDE.Nacionalidad';
            return NacionalidadColumns;
        }());
        INSUDE.NacionalidadColumns = NacionalidadColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var NacionalidadForm = /** @class */ (function (_super) {
            __extends(NacionalidadForm, _super);
            function NacionalidadForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!NacionalidadForm.init) {
                    NacionalidadForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(NacionalidadForm, [
                        'Nombre', w0,
                        'Estado', w0,
                        'CreateUser', w0,
                        'CreateDate', w1
                    ]);
                }
                return _this;
            }
            NacionalidadForm.formKey = 'INSUDE.Nacionalidad';
            return NacionalidadForm;
        }(Serenity.PrefixedContext));
        INSUDE.NacionalidadForm = NacionalidadForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var NacionalidadRow;
        (function (NacionalidadRow) {
            NacionalidadRow.idProperty = 'IdNacionalidad';
            NacionalidadRow.nameProperty = 'Nombre';
            NacionalidadRow.localTextPrefix = 'INSUDE.Nacionalidad';
            NacionalidadRow.lookupKey = 'INSUDE.Nacionalidad';
            function getLookup() {
                return Q.getLookup('INSUDE.Nacionalidad');
            }
            NacionalidadRow.getLookup = getLookup;
            NacionalidadRow.deletePermission = 'Administration:General';
            NacionalidadRow.insertPermission = 'Administration:General';
            NacionalidadRow.readPermission = 'Administration:General';
            NacionalidadRow.updatePermission = 'Administration:General';
        })(NacionalidadRow = INSUDE.NacionalidadRow || (INSUDE.NacionalidadRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var NacionalidadService;
        (function (NacionalidadService) {
            NacionalidadService.baseUrl = 'INSUDE/Nacionalidad';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                NacionalidadService[x] = function (r, s, o) {
                    return Q.serviceRequest(NacionalidadService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(NacionalidadService = INSUDE.NacionalidadService || (INSUDE.NacionalidadService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var NivelesPorCarreraColumns = /** @class */ (function () {
            function NivelesPorCarreraColumns() {
            }
            NivelesPorCarreraColumns.columnsKey = 'INSUDE.NivelesPorCarrera';
            return NivelesPorCarreraColumns;
        }());
        INSUDE.NivelesPorCarreraColumns = NivelesPorCarreraColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var NivelesPorCarreraForm = /** @class */ (function (_super) {
            __extends(NivelesPorCarreraForm, _super);
            function NivelesPorCarreraForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!NivelesPorCarreraForm.init) {
                    NivelesPorCarreraForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(NivelesPorCarreraForm, [
                        'IdTitulo', w0,
                        'Nombre', w1,
                        'Orden', w0,
                        'IdTipoCalificacion', w0,
                        'CreateDate', w2,
                        'CreateUser', w1
                    ]);
                }
                return _this;
            }
            NivelesPorCarreraForm.formKey = 'INSUDE.NivelesPorCarrera';
            return NivelesPorCarreraForm;
        }(Serenity.PrefixedContext));
        INSUDE.NivelesPorCarreraForm = NivelesPorCarreraForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var NivelesPorCarreraRow;
        (function (NivelesPorCarreraRow) {
            NivelesPorCarreraRow.idProperty = 'IdTituloNivel';
            NivelesPorCarreraRow.nameProperty = 'Nombre';
            NivelesPorCarreraRow.localTextPrefix = 'INSUDE.NivelesPorCarrera';
            NivelesPorCarreraRow.deletePermission = 'Administration:General';
            NivelesPorCarreraRow.insertPermission = 'Administration:General';
            NivelesPorCarreraRow.readPermission = 'Administration:General';
            NivelesPorCarreraRow.updatePermission = 'Administration:General';
        })(NivelesPorCarreraRow = INSUDE.NivelesPorCarreraRow || (INSUDE.NivelesPorCarreraRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var NivelesPorCarreraService;
        (function (NivelesPorCarreraService) {
            NivelesPorCarreraService.baseUrl = 'INSUDE/NivelesPorCarrera';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                NivelesPorCarreraService[x] = function (r, s, o) {
                    return Q.serviceRequest(NivelesPorCarreraService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(NivelesPorCarreraService = INSUDE.NivelesPorCarreraService || (INSUDE.NivelesPorCarreraService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var PaisColumns = /** @class */ (function () {
            function PaisColumns() {
            }
            PaisColumns.columnsKey = 'INSUDE.Pais';
            return PaisColumns;
        }());
        INSUDE.PaisColumns = PaisColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var PaisForm = /** @class */ (function (_super) {
            __extends(PaisForm, _super);
            function PaisForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PaisForm.init) {
                    PaisForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(PaisForm, [
                        'Nombre', w0,
                        'Estado', w0,
                        'CreateDate', w1,
                        'CreateUser', w0
                    ]);
                }
                return _this;
            }
            PaisForm.formKey = 'INSUDE.Pais';
            return PaisForm;
        }(Serenity.PrefixedContext));
        INSUDE.PaisForm = PaisForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var PaisRow;
        (function (PaisRow) {
            PaisRow.idProperty = 'IdPais';
            PaisRow.nameProperty = 'Nombre';
            PaisRow.localTextPrefix = 'INSUDE.Pais';
            PaisRow.lookupKey = 'INSUDE.Pais';
            function getLookup() {
                return Q.getLookup('INSUDE.Pais');
            }
            PaisRow.getLookup = getLookup;
            PaisRow.deletePermission = 'Administration:General';
            PaisRow.insertPermission = 'Administration:General';
            PaisRow.readPermission = 'Administration:General';
            PaisRow.updatePermission = 'Administration:General';
        })(PaisRow = INSUDE.PaisRow || (INSUDE.PaisRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var PaisService;
        (function (PaisService) {
            PaisService.baseUrl = 'INSUDE/Pais';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PaisService[x] = function (r, s, o) {
                    return Q.serviceRequest(PaisService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PaisService = INSUDE.PaisService || (INSUDE.PaisService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var PensumColumns = /** @class */ (function () {
            function PensumColumns() {
            }
            PensumColumns.columnsKey = 'INSUDE.Pensum';
            return PensumColumns;
        }());
        INSUDE.PensumColumns = PensumColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var PensumForm = /** @class */ (function (_super) {
            __extends(PensumForm, _super);
            function PensumForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PensumForm.init) {
                    PensumForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.LookupEditor;
                    Q.initFormType(PensumForm, [
                        'IdTitulo', w0,
                        'Codigo', w1,
                        'Nombre', w1,
                        'IdStatus', w2
                    ]);
                }
                return _this;
            }
            PensumForm.formKey = 'INSUDE.Pensum';
            return PensumForm;
        }(Serenity.PrefixedContext));
        INSUDE.PensumForm = PensumForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var PensumRow;
        (function (PensumRow) {
            PensumRow.idProperty = 'IdPensum';
            PensumRow.nameProperty = 'Codigo';
            PensumRow.localTextPrefix = 'INSUDE.Pensum';
            PensumRow.deletePermission = 'Administration:General';
            PensumRow.insertPermission = 'Administration:General';
            PensumRow.readPermission = 'Administration:General';
            PensumRow.updatePermission = 'Administration:General';
        })(PensumRow = INSUDE.PensumRow || (INSUDE.PensumRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var PensumService;
        (function (PensumService) {
            PensumService.baseUrl = 'INSUDE/Pensum';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PensumService[x] = function (r, s, o) {
                    return Q.serviceRequest(PensumService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PensumService = INSUDE.PensumService || (INSUDE.PensumService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var PrivilegiosColumns = /** @class */ (function () {
            function PrivilegiosColumns() {
            }
            PrivilegiosColumns.columnsKey = 'INSUDE.Privilegios';
            return PrivilegiosColumns;
        }());
        INSUDE.PrivilegiosColumns = PrivilegiosColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var PrivilegiosForm = /** @class */ (function (_super) {
            __extends(PrivilegiosForm, _super);
            function PrivilegiosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PrivilegiosForm.init) {
                    PrivilegiosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(PrivilegiosForm, [
                        'Rol', w0,
                        'TipoUsuario', w0,
                        'Descripcion', w0,
                        'CreateUser', w0,
                        'CreateDate', w1,
                        'LastUpdatedAt', w1
                    ]);
                }
                return _this;
            }
            PrivilegiosForm.formKey = 'INSUDE.Privilegios';
            return PrivilegiosForm;
        }(Serenity.PrefixedContext));
        INSUDE.PrivilegiosForm = PrivilegiosForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var PrivilegiosRow;
        (function (PrivilegiosRow) {
            PrivilegiosRow.idProperty = 'IdRol';
            PrivilegiosRow.nameProperty = 'Rol';
            PrivilegiosRow.localTextPrefix = 'INSUDE.Privilegios';
            PrivilegiosRow.deletePermission = 'Administration:General';
            PrivilegiosRow.insertPermission = 'Administration:General';
            PrivilegiosRow.readPermission = 'Administration:General';
            PrivilegiosRow.updatePermission = 'Administration:General';
        })(PrivilegiosRow = INSUDE.PrivilegiosRow || (INSUDE.PrivilegiosRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var PrivilegiosService;
        (function (PrivilegiosService) {
            PrivilegiosService.baseUrl = 'INSUDE/Privilegios';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PrivilegiosService[x] = function (r, s, o) {
                    return Q.serviceRequest(PrivilegiosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PrivilegiosService = INSUDE.PrivilegiosService || (INSUDE.PrivilegiosService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var PromocionesColumns = /** @class */ (function () {
            function PromocionesColumns() {
            }
            PromocionesColumns.columnsKey = 'INSUDE.Promociones';
            return PromocionesColumns;
        }());
        INSUDE.PromocionesColumns = PromocionesColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var PromocionesForm = /** @class */ (function (_super) {
            __extends(PromocionesForm, _super);
            function PromocionesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PromocionesForm.init) {
                    PromocionesForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(PromocionesForm, [
                        'IdTitulo', w0,
                        'Descripcion', w1,
                        'YearInicio', w0,
                        'YearFin', w0,
                        'Estado', w1,
                        'CreateDate', w2,
                        'LastUpdatedAt', w2
                    ]);
                }
                return _this;
            }
            PromocionesForm.formKey = 'INSUDE.Promociones';
            return PromocionesForm;
        }(Serenity.PrefixedContext));
        INSUDE.PromocionesForm = PromocionesForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var PromocionesRow;
        (function (PromocionesRow) {
            PromocionesRow.idProperty = 'IdPromocion';
            PromocionesRow.nameProperty = 'Descripcion';
            PromocionesRow.localTextPrefix = 'INSUDE.Promociones';
            PromocionesRow.deletePermission = 'Administration:General';
            PromocionesRow.insertPermission = 'Administration:General';
            PromocionesRow.readPermission = 'Administration:General';
            PromocionesRow.updatePermission = 'Administration:General';
        })(PromocionesRow = INSUDE.PromocionesRow || (INSUDE.PromocionesRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var PromocionesService;
        (function (PromocionesService) {
            PromocionesService.baseUrl = 'INSUDE/Promociones';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PromocionesService[x] = function (r, s, o) {
                    return Q.serviceRequest(PromocionesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PromocionesService = INSUDE.PromocionesService || (INSUDE.PromocionesService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var RangosColumns = /** @class */ (function () {
            function RangosColumns() {
            }
            RangosColumns.columnsKey = 'INSUDE.Rangos';
            return RangosColumns;
        }());
        INSUDE.RangosColumns = RangosColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var RangosForm = /** @class */ (function (_super) {
            __extends(RangosForm, _super);
            function RangosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RangosForm.init) {
                    RangosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RangosForm, [
                        'Nombre', w0
                    ]);
                }
                return _this;
            }
            RangosForm.formKey = 'INSUDE.Rangos';
            return RangosForm;
        }(Serenity.PrefixedContext));
        INSUDE.RangosForm = RangosForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var RangosRow;
        (function (RangosRow) {
            RangosRow.idProperty = 'IdRango';
            RangosRow.nameProperty = 'Nombre';
            RangosRow.localTextPrefix = 'INSUDE.Rangos';
            RangosRow.lookupKey = 'INSUDE.Rangos';
            function getLookup() {
                return Q.getLookup('INSUDE.Rangos');
            }
            RangosRow.getLookup = getLookup;
            RangosRow.deletePermission = 'Administration:General';
            RangosRow.insertPermission = 'Administration:General';
            RangosRow.readPermission = 'Administration:General';
            RangosRow.updatePermission = 'Administration:General';
        })(RangosRow = INSUDE.RangosRow || (INSUDE.RangosRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var RangosService;
        (function (RangosService) {
            RangosService.baseUrl = 'INSUDE/Rangos';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RangosService[x] = function (r, s, o) {
                    return Q.serviceRequest(RangosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RangosService = INSUDE.RangosService || (INSUDE.RangosService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var RequisitosColumns = /** @class */ (function () {
            function RequisitosColumns() {
            }
            RequisitosColumns.columnsKey = 'INSUDE.Requisitos';
            return RequisitosColumns;
        }());
        INSUDE.RequisitosColumns = RequisitosColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var RequisitosForm = /** @class */ (function (_super) {
            __extends(RequisitosForm, _super);
            function RequisitosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RequisitosForm.init) {
                    RequisitosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(RequisitosForm, [
                        'Nombre', w0,
                        'CreateUser', w0,
                        'CreateDate', w1
                    ]);
                }
                return _this;
            }
            RequisitosForm.formKey = 'INSUDE.Requisitos';
            return RequisitosForm;
        }(Serenity.PrefixedContext));
        INSUDE.RequisitosForm = RequisitosForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var RequisitosRow;
        (function (RequisitosRow) {
            RequisitosRow.idProperty = 'IdRequisito';
            RequisitosRow.nameProperty = 'Nombre';
            RequisitosRow.localTextPrefix = 'INSUDE.Requisitos';
            RequisitosRow.deletePermission = 'Administration:General';
            RequisitosRow.insertPermission = 'Administration:General';
            RequisitosRow.readPermission = 'Administration:General';
            RequisitosRow.updatePermission = 'Administration:General';
        })(RequisitosRow = INSUDE.RequisitosRow || (INSUDE.RequisitosRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var RequisitosService;
        (function (RequisitosService) {
            RequisitosService.baseUrl = 'INSUDE/Requisitos';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RequisitosService[x] = function (r, s, o) {
                    return Q.serviceRequest(RequisitosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RequisitosService = INSUDE.RequisitosService || (INSUDE.RequisitosService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var ServiciosEstudiantilesColumns = /** @class */ (function () {
            function ServiciosEstudiantilesColumns() {
            }
            ServiciosEstudiantilesColumns.columnsKey = 'INSUDE.ServiciosEstudiantiles';
            return ServiciosEstudiantilesColumns;
        }());
        INSUDE.ServiciosEstudiantilesColumns = ServiciosEstudiantilesColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var ServiciosEstudiantilesForm = /** @class */ (function (_super) {
            __extends(ServiciosEstudiantilesForm, _super);
            function ServiciosEstudiantilesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ServiciosEstudiantilesForm.init) {
                    ServiciosEstudiantilesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(ServiciosEstudiantilesForm, [
                        'Descripcion', w0,
                        'CreateDate', w1,
                        'LastUpdatedAt', w1,
                        'CreateUser', w0
                    ]);
                }
                return _this;
            }
            ServiciosEstudiantilesForm.formKey = 'INSUDE.ServiciosEstudiantiles';
            return ServiciosEstudiantilesForm;
        }(Serenity.PrefixedContext));
        INSUDE.ServiciosEstudiantilesForm = ServiciosEstudiantilesForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var ServiciosEstudiantilesRow;
        (function (ServiciosEstudiantilesRow) {
            ServiciosEstudiantilesRow.idProperty = 'Id';
            ServiciosEstudiantilesRow.nameProperty = 'Descripcion';
            ServiciosEstudiantilesRow.localTextPrefix = 'INSUDE.ServiciosEstudiantiles';
            ServiciosEstudiantilesRow.deletePermission = 'Administration:General';
            ServiciosEstudiantilesRow.insertPermission = 'Administration:General';
            ServiciosEstudiantilesRow.readPermission = 'Administration:General';
            ServiciosEstudiantilesRow.updatePermission = 'Administration:General';
        })(ServiciosEstudiantilesRow = INSUDE.ServiciosEstudiantilesRow || (INSUDE.ServiciosEstudiantilesRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var ServiciosEstudiantilesService;
        (function (ServiciosEstudiantilesService) {
            ServiciosEstudiantilesService.baseUrl = 'INSUDE/ServiciosEstudiantiles';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ServiciosEstudiantilesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ServiciosEstudiantilesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ServiciosEstudiantilesService = INSUDE.ServiciosEstudiantilesService || (INSUDE.ServiciosEstudiantilesService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var SexoColumns = /** @class */ (function () {
            function SexoColumns() {
            }
            SexoColumns.columnsKey = 'INSUDE.Sexo';
            return SexoColumns;
        }());
        INSUDE.SexoColumns = SexoColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var SexoForm = /** @class */ (function (_super) {
            __extends(SexoForm, _super);
            function SexoForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SexoForm.init) {
                    SexoForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(SexoForm, [
                        'Nomsexo', w0
                    ]);
                }
                return _this;
            }
            SexoForm.formKey = 'INSUDE.Sexo';
            return SexoForm;
        }(Serenity.PrefixedContext));
        INSUDE.SexoForm = SexoForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var SexoRow;
        (function (SexoRow) {
            SexoRow.idProperty = 'Codsexo';
            SexoRow.nameProperty = 'Codsexo';
            SexoRow.localTextPrefix = 'INSUDE.Sexo';
            SexoRow.lookupKey = 'INSUDE.Sexo';
            function getLookup() {
                return Q.getLookup('INSUDE.Sexo');
            }
            SexoRow.getLookup = getLookup;
            SexoRow.deletePermission = 'Administration:General';
            SexoRow.insertPermission = 'Administration:General';
            SexoRow.readPermission = 'Administration:General';
            SexoRow.updatePermission = 'Administration:General';
        })(SexoRow = INSUDE.SexoRow || (INSUDE.SexoRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var SexoService;
        (function (SexoService) {
            SexoService.baseUrl = 'INSUDE/Sexo';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SexoService[x] = function (r, s, o) {
                    return Q.serviceRequest(SexoService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SexoService = INSUDE.SexoService || (INSUDE.SexoService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var StatusColumns = /** @class */ (function () {
            function StatusColumns() {
            }
            StatusColumns.columnsKey = 'INSUDE.Status';
            return StatusColumns;
        }());
        INSUDE.StatusColumns = StatusColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var StatusForm = /** @class */ (function (_super) {
            __extends(StatusForm, _super);
            function StatusForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!StatusForm.init) {
                    StatusForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(StatusForm, [
                        'NomStatus', w0
                    ]);
                }
                return _this;
            }
            StatusForm.formKey = 'INSUDE.Status';
            return StatusForm;
        }(Serenity.PrefixedContext));
        INSUDE.StatusForm = StatusForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var StatusRow;
        (function (StatusRow) {
            StatusRow.idProperty = 'IdStatus';
            StatusRow.nameProperty = 'NomStatus';
            StatusRow.localTextPrefix = 'INSUDE.Status';
            StatusRow.lookupKey = 'INSUDE.Status';
            function getLookup() {
                return Q.getLookup('INSUDE.Status');
            }
            StatusRow.getLookup = getLookup;
            StatusRow.deletePermission = 'Administration:General';
            StatusRow.insertPermission = 'Administration:General';
            StatusRow.readPermission = 'Administration:General';
            StatusRow.updatePermission = 'Administration:General';
        })(StatusRow = INSUDE.StatusRow || (INSUDE.StatusRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var StatusService;
        (function (StatusService) {
            StatusService.baseUrl = 'INSUDE/Status';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                StatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(StatusService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(StatusService = INSUDE.StatusService || (INSUDE.StatusService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var TipoDeCalificacionColumns = /** @class */ (function () {
            function TipoDeCalificacionColumns() {
            }
            TipoDeCalificacionColumns.columnsKey = 'INSUDE.TipoDeCalificacion';
            return TipoDeCalificacionColumns;
        }());
        INSUDE.TipoDeCalificacionColumns = TipoDeCalificacionColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var TipoDeCalificacionForm = /** @class */ (function (_super) {
            __extends(TipoDeCalificacionForm, _super);
            function TipoDeCalificacionForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TipoDeCalificacionForm.init) {
                    TipoDeCalificacionForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(TipoDeCalificacionForm, [
                        'Nombre', w0,
                        'CreateDate', w1,
                        'CreateUser', w0
                    ]);
                }
                return _this;
            }
            TipoDeCalificacionForm.formKey = 'INSUDE.TipoDeCalificacion';
            return TipoDeCalificacionForm;
        }(Serenity.PrefixedContext));
        INSUDE.TipoDeCalificacionForm = TipoDeCalificacionForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var TipoDeCalificacionRow;
        (function (TipoDeCalificacionRow) {
            TipoDeCalificacionRow.idProperty = 'IdTipoCalificacion';
            TipoDeCalificacionRow.nameProperty = 'Nombre';
            TipoDeCalificacionRow.localTextPrefix = 'INSUDE.TipoDeCalificacion';
            TipoDeCalificacionRow.deletePermission = 'Administration:General';
            TipoDeCalificacionRow.insertPermission = 'Administration:General';
            TipoDeCalificacionRow.readPermission = 'Administration:General';
            TipoDeCalificacionRow.updatePermission = 'Administration:General';
        })(TipoDeCalificacionRow = INSUDE.TipoDeCalificacionRow || (INSUDE.TipoDeCalificacionRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var TipoDeCalificacionService;
        (function (TipoDeCalificacionService) {
            TipoDeCalificacionService.baseUrl = 'INSUDE/TipoDeCalificacion';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TipoDeCalificacionService[x] = function (r, s, o) {
                    return Q.serviceRequest(TipoDeCalificacionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TipoDeCalificacionService = INSUDE.TipoDeCalificacionService || (INSUDE.TipoDeCalificacionService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var TitulosColumns = /** @class */ (function () {
            function TitulosColumns() {
            }
            TitulosColumns.columnsKey = 'INSUDE.Titulos';
            return TitulosColumns;
        }());
        INSUDE.TitulosColumns = TitulosColumns;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var TitulosForm = /** @class */ (function (_super) {
            __extends(TitulosForm, _super);
            function TitulosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TitulosForm.init) {
                    TitulosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.BooleanEditor;
                    var w4 = s.DateEditor;
                    Q.initFormType(TitulosForm, [
                        'Codigo', w0,
                        'Nombre', w0,
                        'Mencion', w0,
                        'IdEscuela', w1,
                        'IdPensum', w1,
                        'MontoInscripcion', w2,
                        'Costo', w2,
                        'CostoCredito', w3,
                        'TituloOtorgado', w0,
                        'IdRequisitoNacional', w1,
                        'IdRequisitoExtrangero', w1,
                        'TipoMatricula', w0,
                        'Estado', w0,
                        'CreateDate', w4,
                        'CreateUser', w0,
                        'CicloAcademico', w0
                    ]);
                }
                return _this;
            }
            TitulosForm.formKey = 'INSUDE.Titulos';
            return TitulosForm;
        }(Serenity.PrefixedContext));
        INSUDE.TitulosForm = TitulosForm;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var TitulosRow;
        (function (TitulosRow) {
            TitulosRow.idProperty = 'IdTitulo';
            TitulosRow.nameProperty = 'Codigo';
            TitulosRow.localTextPrefix = 'INSUDE.Titulos';
            TitulosRow.lookupKey = 'INSUDE.Titulos';
            function getLookup() {
                return Q.getLookup('INSUDE.Titulos');
            }
            TitulosRow.getLookup = getLookup;
            TitulosRow.deletePermission = 'Administration:General';
            TitulosRow.insertPermission = 'Administration:General';
            TitulosRow.readPermission = 'Administration:General';
            TitulosRow.updatePermission = 'Administration:General';
        })(TitulosRow = INSUDE.TitulosRow || (INSUDE.TitulosRow = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var TitulosService;
        (function (TitulosService) {
            TitulosService.baseUrl = 'INSUDE/Titulos';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TitulosService[x] = function (r, s, o) {
                    return Q.serviceRequest(TitulosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TitulosService = INSUDE.TitulosService || (INSUDE.TitulosService = {}));
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var INSUDE_SIAR;
(function (INSUDE_SIAR) {
    var Web;
    (function (Web) {
        var Modules;
        (function (Modules) {
            var MovieDB;
            (function (MovieDB) {
                var Gender;
                (function (Gender) {
                    Gender[Gender["Male"] = 1] = "Male";
                    Gender[Gender["Female"] = 2] = "Female";
                    Gender[Gender["Pajaro"] = 3] = "Pajaro";
                })(Gender = MovieDB.Gender || (MovieDB.Gender = {}));
                Serenity.Decorators.registerEnumType(Gender, 'INSUDE_SIAR.Web.Modules.MovieDB.Gender', 'MovieDB.Gender');
            })(MovieDB = Modules.MovieDB || (Modules.MovieDB = {}));
        })(Modules = Web.Modules || (Web.Modules = {}));
    })(Web = INSUDE_SIAR.Web || (INSUDE_SIAR.Web = {}));
})(INSUDE_SIAR || (INSUDE_SIAR = {}));
var INSUDE_SIAR;
(function (INSUDE_SIAR) {
    var Web;
    (function (Web) {
        var Modules;
        (function (Modules) {
            var MovieDB;
            (function (MovieDB) {
                var Person;
                (function (Person) {
                    var PersonMovieColumns = /** @class */ (function () {
                        function PersonMovieColumns() {
                        }
                        PersonMovieColumns.columnsKey = 'MovieDB.PersonMovie';
                        return PersonMovieColumns;
                    }());
                    Person.PersonMovieColumns = PersonMovieColumns;
                })(Person = MovieDB.Person || (MovieDB.Person = {}));
            })(MovieDB = Modules.MovieDB || (Modules.MovieDB = {}));
        })(Modules = Web.Modules || (Web.Modules = {}));
    })(Web = INSUDE_SIAR.Web || (INSUDE_SIAR.Web = {}));
})(INSUDE_SIAR || (INSUDE_SIAR = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = MiMovieTutorial.Membership || (MiMovieTutorial.Membership = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = MiMovieTutorial.Membership || (MiMovieTutorial.Membership = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = MiMovieTutorial.Membership || (MiMovieTutorial.Membership = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = MiMovieTutorial.Membership || (MiMovieTutorial.Membership = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = MiMovieTutorial.Membership || (MiMovieTutorial.Membership = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var GenreColumns = /** @class */ (function () {
            function GenreColumns() {
            }
            GenreColumns.columnsKey = 'MovieDB.Genre';
            return GenreColumns;
        }());
        MovieDB.GenreColumns = GenreColumns;
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var GenreForm = /** @class */ (function (_super) {
            __extends(GenreForm, _super);
            function GenreForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!GenreForm.init) {
                    GenreForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(GenreForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            GenreForm.formKey = 'MovieDB.Genre';
            return GenreForm;
        }(Serenity.PrefixedContext));
        MovieDB.GenreForm = GenreForm;
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var GenreRow;
        (function (GenreRow) {
            GenreRow.idProperty = 'GenreId';
            GenreRow.nameProperty = 'Name';
            GenreRow.localTextPrefix = 'MovieDB.Genre';
            GenreRow.lookupKey = 'MovieDB.Genre';
            function getLookup() {
                return Q.getLookup('MovieDB.Genre');
            }
            GenreRow.getLookup = getLookup;
            GenreRow.deletePermission = 'Administration:General';
            GenreRow.insertPermission = 'Administration:General';
            GenreRow.readPermission = 'Administration:General';
            GenreRow.updatePermission = 'Administration:General';
        })(GenreRow = MovieDB.GenreRow || (MovieDB.GenreRow = {}));
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var GenreService;
        (function (GenreService) {
            GenreService.baseUrl = 'MovieDB/Genre';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                GenreService[x] = function (r, s, o) {
                    return Q.serviceRequest(GenreService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(GenreService = MovieDB.GenreService || (MovieDB.GenreService = {}));
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieCastColumns = /** @class */ (function () {
            function MovieCastColumns() {
            }
            MovieCastColumns.columnsKey = 'MovieDB.MovieCast';
            return MovieCastColumns;
        }());
        MovieDB.MovieCastColumns = MovieCastColumns;
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieCastForm = /** @class */ (function (_super) {
            __extends(MovieCastForm, _super);
            function MovieCastForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MovieCastForm.init) {
                    MovieCastForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(MovieCastForm, [
                        'PersonId', w0,
                        'Character', w1
                    ]);
                }
                return _this;
            }
            MovieCastForm.formKey = 'MovieDB.MovieCast';
            return MovieCastForm;
        }(Serenity.PrefixedContext));
        MovieDB.MovieCastForm = MovieCastForm;
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieCastRow;
        (function (MovieCastRow) {
            MovieCastRow.idProperty = 'MovieCastId';
            MovieCastRow.nameProperty = 'Character';
            MovieCastRow.localTextPrefix = 'MovieDB.MovieCast';
            MovieCastRow.deletePermission = 'Administration:General';
            MovieCastRow.insertPermission = 'Administration:General';
            MovieCastRow.readPermission = 'Administration:General';
            MovieCastRow.updatePermission = 'Administration:General';
        })(MovieCastRow = MovieDB.MovieCastRow || (MovieDB.MovieCastRow = {}));
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieCastService;
        (function (MovieCastService) {
            MovieCastService.baseUrl = 'MovieDB/MovieCast';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MovieCastService[x] = function (r, s, o) {
                    return Q.serviceRequest(MovieCastService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MovieCastService = MovieDB.MovieCastService || (MovieDB.MovieCastService = {}));
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieColumns = /** @class */ (function () {
            function MovieColumns() {
            }
            MovieColumns.columnsKey = 'MovieDB.Movie';
            return MovieColumns;
        }());
        MovieDB.MovieColumns = MovieColumns;
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieForm = /** @class */ (function (_super) {
            __extends(MovieForm, _super);
            function MovieForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MovieForm.init) {
                    MovieForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = MovieDB.Entities.MovieCastEditor;
                    var w3 = s.ImageUploadEditor;
                    var w4 = s.MultipleImageUploadEditor;
                    var w5 = s.IntegerEditor;
                    var w6 = s.DateEditor;
                    var w7 = s.EnumEditor;
                    var w8 = s.LookupEditor;
                    Q.initFormType(MovieForm, [
                        'Title', w0,
                        'Description', w1,
                        'CastList', w2,
                        'PrimaryImage', w3,
                        'GalleryImages', w4,
                        'Storyline', w1,
                        'Year', w5,
                        'ReleaseDate', w6,
                        'Runtime', w5,
                        'Kind', w7,
                        'GenreList', w8
                    ]);
                }
                return _this;
            }
            MovieForm.formKey = 'MovieDB.Movie';
            return MovieForm;
        }(Serenity.PrefixedContext));
        MovieDB.MovieForm = MovieForm;
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieGenresRow;
        (function (MovieGenresRow) {
            MovieGenresRow.idProperty = 'MovieGenreId';
            MovieGenresRow.localTextPrefix = 'MovieDB.MovieGenres';
            MovieGenresRow.deletePermission = 'Administration:General';
            MovieGenresRow.insertPermission = 'Administration:General';
            MovieGenresRow.readPermission = 'Administration:General';
            MovieGenresRow.updatePermission = 'Administration:General';
        })(MovieGenresRow = MovieDB.MovieGenresRow || (MovieDB.MovieGenresRow = {}));
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieRow;
        (function (MovieRow) {
            MovieRow.idProperty = 'MovieId';
            MovieRow.nameProperty = 'Title';
            MovieRow.localTextPrefix = 'MovieDB.Movie';
            MovieRow.deletePermission = 'Administration:General';
            MovieRow.insertPermission = 'Administration:General';
            MovieRow.readPermission = 'Administration:General';
            MovieRow.updatePermission = 'Administration:General';
        })(MovieRow = MovieDB.MovieRow || (MovieDB.MovieRow = {}));
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieService;
        (function (MovieService) {
            MovieService.baseUrl = 'MovieDB/Movie';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MovieService[x] = function (r, s, o) {
                    return Q.serviceRequest(MovieService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MovieService = MovieDB.MovieService || (MovieDB.MovieService = {}));
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var PersonColumns = /** @class */ (function () {
            function PersonColumns() {
            }
            PersonColumns.columnsKey = 'MovieDB.Person';
            return PersonColumns;
        }());
        MovieDB.PersonColumns = PersonColumns;
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var PersonForm = /** @class */ (function (_super) {
            __extends(PersonForm, _super);
            function PersonForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PersonForm.init) {
                    PersonForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.ImageUploadEditor;
                    var w2 = s.MultipleImageUploadEditor;
                    var w3 = s.DateEditor;
                    var w4 = s.EnumEditor;
                    var w5 = s.IntegerEditor;
                    Q.initFormType(PersonForm, [
                        'Firstname', w0,
                        'Lastname', w0,
                        'PrimaryImage', w1,
                        'GalleryImages', w2,
                        'BirthDate', w3,
                        'BirthPlace', w0,
                        'Gender', w4,
                        'Height', w5
                    ]);
                }
                return _this;
            }
            PersonForm.formKey = 'MovieDB.Person';
            return PersonForm;
        }(Serenity.PrefixedContext));
        MovieDB.PersonForm = PersonForm;
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var PersonRow;
        (function (PersonRow) {
            PersonRow.idProperty = 'PersonId';
            PersonRow.nameProperty = 'Firstname';
            PersonRow.localTextPrefix = 'MovieDB.Person';
            PersonRow.lookupKey = 'MovieDB.Person';
            function getLookup() {
                return Q.getLookup('MovieDB.Person');
            }
            PersonRow.getLookup = getLookup;
            PersonRow.deletePermission = 'Administration:General';
            PersonRow.insertPermission = 'Administration:General';
            PersonRow.readPermission = 'Administration:General';
            PersonRow.updatePermission = 'Administration:General';
        })(PersonRow = MovieDB.PersonRow || (MovieDB.PersonRow = {}));
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var PersonService;
        (function (PersonService) {
            PersonService.baseUrl = 'MovieDB/Person';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PersonService[x] = function (r, s, o) {
                    return Q.serviceRequest(PersonService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PersonService = MovieDB.PersonService || (MovieDB.PersonService = {}));
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var CategoryColumns = /** @class */ (function () {
            function CategoryColumns() {
            }
            CategoryColumns.columnsKey = 'Northwind.Category';
            return CategoryColumns;
        }());
        Northwind.CategoryColumns = CategoryColumns;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var CategoryForm = /** @class */ (function (_super) {
            __extends(CategoryForm, _super);
            function CategoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoryForm.init) {
                    CategoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CategoryForm, [
                        'CategoryName', w0,
                        'Description', w0
                    ]);
                }
                return _this;
            }
            CategoryForm.formKey = 'Northwind.Category';
            return CategoryForm;
        }(Serenity.PrefixedContext));
        Northwind.CategoryForm = CategoryForm;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var CategoryLangRow;
        (function (CategoryLangRow) {
            CategoryLangRow.idProperty = 'Id';
            CategoryLangRow.nameProperty = 'CategoryName';
            CategoryLangRow.localTextPrefix = 'Northwind.CategoryLang';
            CategoryLangRow.deletePermission = 'Northwind:General';
            CategoryLangRow.insertPermission = 'Northwind:General';
            CategoryLangRow.readPermission = 'Northwind:General';
            CategoryLangRow.updatePermission = 'Northwind:General';
        })(CategoryLangRow = Northwind.CategoryLangRow || (Northwind.CategoryLangRow = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var CategoryLangService;
        (function (CategoryLangService) {
            CategoryLangService.baseUrl = 'Northwind/CategoryLang';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoryLangService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoryLangService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoryLangService = Northwind.CategoryLangService || (Northwind.CategoryLangService = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var CategoryRow;
        (function (CategoryRow) {
            CategoryRow.idProperty = 'CategoryID';
            CategoryRow.nameProperty = 'CategoryName';
            CategoryRow.localTextPrefix = 'Northwind.Category';
            CategoryRow.lookupKey = 'Northwind.Category';
            function getLookup() {
                return Q.getLookup('Northwind.Category');
            }
            CategoryRow.getLookup = getLookup;
            CategoryRow.deletePermission = 'Northwind:General';
            CategoryRow.insertPermission = 'Northwind:General';
            CategoryRow.readPermission = 'Northwind:General';
            CategoryRow.updatePermission = 'Northwind:General';
        })(CategoryRow = Northwind.CategoryRow || (Northwind.CategoryRow = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var CategoryService;
        (function (CategoryService) {
            CategoryService.baseUrl = 'Northwind/Category';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoryService = Northwind.CategoryService || (Northwind.CategoryService = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var CustomerColumns = /** @class */ (function () {
            function CustomerColumns() {
            }
            CustomerColumns.columnsKey = 'Northwind.Customer';
            return CustomerColumns;
        }());
        Northwind.CustomerColumns = CustomerColumns;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var CustomerCustomerDemoRow;
        (function (CustomerCustomerDemoRow) {
            CustomerCustomerDemoRow.idProperty = 'ID';
            CustomerCustomerDemoRow.nameProperty = 'CustomerID';
            CustomerCustomerDemoRow.localTextPrefix = 'Northwind.CustomerCustomerDemo';
            CustomerCustomerDemoRow.deletePermission = 'Northwind:General';
            CustomerCustomerDemoRow.insertPermission = 'Northwind:General';
            CustomerCustomerDemoRow.readPermission = 'Northwind:General';
            CustomerCustomerDemoRow.updatePermission = 'Northwind:General';
        })(CustomerCustomerDemoRow = Northwind.CustomerCustomerDemoRow || (Northwind.CustomerCustomerDemoRow = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var CustomerDemographicRow;
        (function (CustomerDemographicRow) {
            CustomerDemographicRow.idProperty = 'ID';
            CustomerDemographicRow.nameProperty = 'CustomerTypeID';
            CustomerDemographicRow.localTextPrefix = 'Northwind.CustomerDemographic';
            CustomerDemographicRow.deletePermission = 'Northwind:General';
            CustomerDemographicRow.insertPermission = 'Northwind:General';
            CustomerDemographicRow.readPermission = 'Northwind:General';
            CustomerDemographicRow.updatePermission = 'Northwind:General';
        })(CustomerDemographicRow = Northwind.CustomerDemographicRow || (Northwind.CustomerDemographicRow = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var CustomerDetailsRow;
        (function (CustomerDetailsRow) {
            CustomerDetailsRow.idProperty = 'Id';
            CustomerDetailsRow.nameProperty = 'Email';
            CustomerDetailsRow.localTextPrefix = 'Northwind.CustomerDetails';
            CustomerDetailsRow.deletePermission = 'Northwind:General';
            CustomerDetailsRow.insertPermission = 'Northwind:General';
            CustomerDetailsRow.readPermission = 'Northwind:General';
            CustomerDetailsRow.updatePermission = 'Northwind:General';
        })(CustomerDetailsRow = Northwind.CustomerDetailsRow || (Northwind.CustomerDetailsRow = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var CustomerForm = /** @class */ (function (_super) {
            __extends(CustomerForm, _super);
            function CustomerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomerForm.init) {
                    CustomerForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = Northwind.NotesEditor;
                    var w3 = s.DateEditor;
                    var w4 = s.EmailEditor;
                    var w5 = s.BooleanEditor;
                    Q.initFormType(CustomerForm, [
                        'CustomerID', w0,
                        'CompanyName', w0,
                        'ContactName', w0,
                        'ContactTitle', w0,
                        'Representatives', w1,
                        'Address', w0,
                        'Country', w1,
                        'City', w1,
                        'Region', w0,
                        'PostalCode', w0,
                        'Phone', w0,
                        'Fax', w0,
                        'NoteList', w2,
                        'LastContactDate', w3,
                        'LastContactedBy', w1,
                        'Email', w4,
                        'SendBulletin', w5
                    ]);
                }
                return _this;
            }
            CustomerForm.formKey = 'Northwind.Customer';
            return CustomerForm;
        }(Serenity.PrefixedContext));
        Northwind.CustomerForm = CustomerForm;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var CustomerGrossSalesRow;
        (function (CustomerGrossSalesRow) {
            CustomerGrossSalesRow.nameProperty = 'ContactName';
            CustomerGrossSalesRow.localTextPrefix = 'Northwind.CustomerGrossSales';
            CustomerGrossSalesRow.deletePermission = 'Northwind:General';
            CustomerGrossSalesRow.insertPermission = 'Northwind:General';
            CustomerGrossSalesRow.readPermission = 'Northwind:General';
            CustomerGrossSalesRow.updatePermission = 'Northwind:General';
        })(CustomerGrossSalesRow = Northwind.CustomerGrossSalesRow || (Northwind.CustomerGrossSalesRow = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var CustomerRepresentativesRow;
        (function (CustomerRepresentativesRow) {
            CustomerRepresentativesRow.idProperty = 'RepresentativeId';
            CustomerRepresentativesRow.localTextPrefix = 'Northwind.CustomerRepresentatives';
            CustomerRepresentativesRow.deletePermission = 'Northwind:Customer:View';
            CustomerRepresentativesRow.insertPermission = 'Northwind:Customer:View';
            CustomerRepresentativesRow.readPermission = 'Northwind:Customer:View';
            CustomerRepresentativesRow.updatePermission = 'Northwind:Customer:View';
        })(CustomerRepresentativesRow = Northwind.CustomerRepresentativesRow || (Northwind.CustomerRepresentativesRow = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.idProperty = 'ID';
            CustomerRow.nameProperty = 'CompanyName';
            CustomerRow.localTextPrefix = 'Northwind.Customer';
            CustomerRow.lookupKey = 'Northwind.Customer';
            function getLookup() {
                return Q.getLookup('Northwind.Customer');
            }
            CustomerRow.getLookup = getLookup;
            CustomerRow.deletePermission = 'Northwind:Customer:Delete';
            CustomerRow.insertPermission = 'Northwind:Customer:Modify';
            CustomerRow.readPermission = 'Northwind:Customer:View';
            CustomerRow.updatePermission = 'Northwind:Customer:Modify';
        })(CustomerRow = Northwind.CustomerRow || (Northwind.CustomerRow = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var CustomerService;
        (function (CustomerService) {
            CustomerService.baseUrl = 'Northwind/Customer';
            [
                'Create',
                'Update',
                'Delete',
                'GetNextNumber',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomerService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerService = Northwind.CustomerService || (Northwind.CustomerService = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var EmployeeRow;
        (function (EmployeeRow) {
            EmployeeRow.idProperty = 'EmployeeID';
            EmployeeRow.nameProperty = 'FullName';
            EmployeeRow.localTextPrefix = 'Northwind.Employee';
            EmployeeRow.lookupKey = 'Northwind.Employee';
            function getLookup() {
                return Q.getLookup('Northwind.Employee');
            }
            EmployeeRow.getLookup = getLookup;
            EmployeeRow.deletePermission = 'Northwind:General';
            EmployeeRow.insertPermission = 'Northwind:General';
            EmployeeRow.readPermission = 'Northwind:General';
            EmployeeRow.updatePermission = 'Northwind:General';
        })(EmployeeRow = Northwind.EmployeeRow || (Northwind.EmployeeRow = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var EmployeeTerritoryRow;
        (function (EmployeeTerritoryRow) {
            EmployeeTerritoryRow.idProperty = 'EmployeeID';
            EmployeeTerritoryRow.nameProperty = 'TerritoryID';
            EmployeeTerritoryRow.localTextPrefix = 'Northwind.EmployeeTerritory';
            EmployeeTerritoryRow.deletePermission = 'Northwind:General';
            EmployeeTerritoryRow.insertPermission = 'Northwind:General';
            EmployeeTerritoryRow.readPermission = 'Northwind:General';
            EmployeeTerritoryRow.updatePermission = 'Northwind:General';
        })(EmployeeTerritoryRow = Northwind.EmployeeTerritoryRow || (Northwind.EmployeeTerritoryRow = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var Gender;
        (function (Gender) {
            Gender[Gender["Male"] = 1] = "Male";
            Gender[Gender["Female"] = 2] = "Female";
        })(Gender = Northwind.Gender || (Northwind.Gender = {}));
        Serenity.Decorators.registerEnumType(Gender, 'MiMovieTutorial.Northwind.Gender', 'MiMovieTutorial.Northwind.Entities.Gender');
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var NoteRow;
        (function (NoteRow) {
            NoteRow.idProperty = 'NoteId';
            NoteRow.nameProperty = 'EntityType';
            NoteRow.localTextPrefix = 'Northwind.Note';
            NoteRow.deletePermission = 'Northwind:General';
            NoteRow.insertPermission = 'Northwind:General';
            NoteRow.readPermission = 'Northwind:General';
            NoteRow.updatePermission = 'Northwind:General';
        })(NoteRow = Northwind.NoteRow || (Northwind.NoteRow = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var OrderColumns = /** @class */ (function () {
            function OrderColumns() {
            }
            OrderColumns.columnsKey = 'Northwind.Order';
            return OrderColumns;
        }());
        Northwind.OrderColumns = OrderColumns;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailColumns = /** @class */ (function () {
            function OrderDetailColumns() {
            }
            OrderDetailColumns.columnsKey = 'Northwind.OrderDetail';
            return OrderDetailColumns;
        }());
        Northwind.OrderDetailColumns = OrderDetailColumns;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailForm = /** @class */ (function (_super) {
            __extends(OrderDetailForm, _super);
            function OrderDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrderDetailForm.init) {
                    OrderDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(OrderDetailForm, [
                        'ProductID', w0,
                        'UnitPrice', w1,
                        'Quantity', w2,
                        'Discount', w1
                    ]);
                }
                return _this;
            }
            OrderDetailForm.formKey = 'Northwind.OrderDetail';
            return OrderDetailForm;
        }(Serenity.PrefixedContext));
        Northwind.OrderDetailForm = OrderDetailForm;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailRow;
        (function (OrderDetailRow) {
            OrderDetailRow.idProperty = 'DetailID';
            OrderDetailRow.localTextPrefix = 'Northwind.OrderDetail';
            OrderDetailRow.deletePermission = 'Northwind:General';
            OrderDetailRow.insertPermission = 'Northwind:General';
            OrderDetailRow.readPermission = 'Northwind:General';
            OrderDetailRow.updatePermission = 'Northwind:General';
        })(OrderDetailRow = Northwind.OrderDetailRow || (Northwind.OrderDetailRow = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailService;
        (function (OrderDetailService) {
            OrderDetailService.baseUrl = 'Northwind/OrderDetail';
            [
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrderDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrderDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrderDetailService = Northwind.OrderDetailService || (Northwind.OrderDetailService = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var OrderForm = /** @class */ (function (_super) {
            __extends(OrderForm, _super);
            function OrderForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrderForm.init) {
                    OrderForm.init = true;
                    var s = Serenity;
                    var w0 = Northwind.CustomerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.LookupEditor;
                    var w3 = Northwind.OrderDetailsEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.StringEditor;
                    Q.initFormType(OrderForm, [
                        'CustomerID', w0,
                        'OrderDate', w1,
                        'RequiredDate', w1,
                        'EmployeeID', w2,
                        'DetailList', w3,
                        'ShippedDate', w1,
                        'ShipVia', w2,
                        'Freight', w4,
                        'ShipName', w5,
                        'ShipAddress', w5,
                        'ShipCity', w5,
                        'ShipRegion', w5,
                        'ShipPostalCode', w5,
                        'ShipCountry', w5
                    ]);
                }
                return _this;
            }
            OrderForm.formKey = 'Northwind.Order';
            return OrderForm;
        }(Serenity.PrefixedContext));
        Northwind.OrderForm = OrderForm;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var OrderRow;
        (function (OrderRow) {
            OrderRow.idProperty = 'OrderID';
            OrderRow.nameProperty = 'CustomerID';
            OrderRow.localTextPrefix = 'Northwind.Order';
            OrderRow.deletePermission = 'Northwind:General';
            OrderRow.insertPermission = 'Northwind:General';
            OrderRow.readPermission = 'Northwind:General';
            OrderRow.updatePermission = 'Northwind:General';
        })(OrderRow = Northwind.OrderRow || (Northwind.OrderRow = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var OrderService;
        (function (OrderService) {
            OrderService.baseUrl = 'Northwind/Order';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrderService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrderService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrderService = Northwind.OrderService || (Northwind.OrderService = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var OrderShippingState;
        (function (OrderShippingState) {
            OrderShippingState[OrderShippingState["NotShipped"] = 0] = "NotShipped";
            OrderShippingState[OrderShippingState["Shipped"] = 1] = "Shipped";
        })(OrderShippingState = Northwind.OrderShippingState || (Northwind.OrderShippingState = {}));
        Serenity.Decorators.registerEnumType(OrderShippingState, 'MiMovieTutorial.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var ProductColumns = /** @class */ (function () {
            function ProductColumns() {
            }
            ProductColumns.columnsKey = 'Northwind.Product';
            return ProductColumns;
        }());
        Northwind.ProductColumns = ProductColumns;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var ProductForm = /** @class */ (function (_super) {
            __extends(ProductForm, _super);
            function ProductForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductForm.init) {
                    ProductForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.ImageUploadEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.LookupEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.IntegerEditor;
                    Q.initFormType(ProductForm, [
                        'ProductName', w0,
                        'ProductImage', w1,
                        'Discontinued', w2,
                        'SupplierID', w3,
                        'CategoryID', w3,
                        'QuantityPerUnit', w0,
                        'UnitPrice', w4,
                        'UnitsInStock', w5,
                        'UnitsOnOrder', w5,
                        'ReorderLevel', w5
                    ]);
                }
                return _this;
            }
            ProductForm.formKey = 'Northwind.Product';
            return ProductForm;
        }(Serenity.PrefixedContext));
        Northwind.ProductForm = ProductForm;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var ProductLangRow;
        (function (ProductLangRow) {
            ProductLangRow.idProperty = 'Id';
            ProductLangRow.nameProperty = 'ProductName';
            ProductLangRow.localTextPrefix = 'Northwind.ProductLang';
            ProductLangRow.deletePermission = 'Northwind:General';
            ProductLangRow.insertPermission = 'Northwind:General';
            ProductLangRow.readPermission = 'Northwind:General';
            ProductLangRow.updatePermission = 'Northwind:General';
        })(ProductLangRow = Northwind.ProductLangRow || (Northwind.ProductLangRow = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var ProductLangService;
        (function (ProductLangService) {
            ProductLangService.baseUrl = 'Northwind/ProductLang';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductLangService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductLangService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductLangService = Northwind.ProductLangService || (Northwind.ProductLangService = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var ProductLogRow;
        (function (ProductLogRow) {
            ProductLogRow.idProperty = 'ProductLogID';
            ProductLogRow.localTextPrefix = 'Northwind.ProductLog';
            ProductLogRow.deletePermission = null;
            ProductLogRow.insertPermission = null;
            ProductLogRow.readPermission = '';
            ProductLogRow.updatePermission = null;
        })(ProductLogRow = Northwind.ProductLogRow || (Northwind.ProductLogRow = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var ProductRow;
        (function (ProductRow) {
            ProductRow.idProperty = 'ProductID';
            ProductRow.nameProperty = 'ProductName';
            ProductRow.localTextPrefix = 'Northwind.Product';
            ProductRow.lookupKey = 'Northwind.Product';
            function getLookup() {
                return Q.getLookup('Northwind.Product');
            }
            ProductRow.getLookup = getLookup;
            ProductRow.deletePermission = 'Northwind:General';
            ProductRow.insertPermission = 'Northwind:General';
            ProductRow.readPermission = 'Northwind:General';
            ProductRow.updatePermission = 'Northwind:General';
        })(ProductRow = Northwind.ProductRow || (Northwind.ProductRow = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var ProductService;
        (function (ProductService) {
            ProductService.baseUrl = 'Northwind/Product';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductService = Northwind.ProductService || (Northwind.ProductService = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var RegionColumns = /** @class */ (function () {
            function RegionColumns() {
            }
            RegionColumns.columnsKey = 'Northwind.Region';
            return RegionColumns;
        }());
        Northwind.RegionColumns = RegionColumns;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var RegionForm = /** @class */ (function (_super) {
            __extends(RegionForm, _super);
            function RegionForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RegionForm.init) {
                    RegionForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(RegionForm, [
                        'RegionID', w0,
                        'RegionDescription', w1
                    ]);
                }
                return _this;
            }
            RegionForm.formKey = 'Northwind.Region';
            return RegionForm;
        }(Serenity.PrefixedContext));
        Northwind.RegionForm = RegionForm;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var RegionRow;
        (function (RegionRow) {
            RegionRow.idProperty = 'RegionID';
            RegionRow.nameProperty = 'RegionDescription';
            RegionRow.localTextPrefix = 'Northwind.Region';
            RegionRow.lookupKey = 'Northwind.Region';
            function getLookup() {
                return Q.getLookup('Northwind.Region');
            }
            RegionRow.getLookup = getLookup;
            RegionRow.deletePermission = 'Northwind:General';
            RegionRow.insertPermission = 'Northwind:General';
            RegionRow.readPermission = 'Northwind:General';
            RegionRow.updatePermission = 'Northwind:General';
        })(RegionRow = Northwind.RegionRow || (Northwind.RegionRow = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var RegionService;
        (function (RegionService) {
            RegionService.baseUrl = 'Northwind/Region';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RegionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RegionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RegionService = Northwind.RegionService || (Northwind.RegionService = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var SalesByCategoryColumns = /** @class */ (function () {
            function SalesByCategoryColumns() {
            }
            SalesByCategoryColumns.columnsKey = 'Northwind.SalesByCategory';
            return SalesByCategoryColumns;
        }());
        Northwind.SalesByCategoryColumns = SalesByCategoryColumns;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var SalesByCategoryRow;
        (function (SalesByCategoryRow) {
            SalesByCategoryRow.nameProperty = 'CategoryName';
            SalesByCategoryRow.localTextPrefix = 'Northwind.SalesByCategory';
            SalesByCategoryRow.deletePermission = 'Northwind:General';
            SalesByCategoryRow.insertPermission = 'Northwind:General';
            SalesByCategoryRow.readPermission = 'Northwind:General';
            SalesByCategoryRow.updatePermission = 'Northwind:General';
        })(SalesByCategoryRow = Northwind.SalesByCategoryRow || (Northwind.SalesByCategoryRow = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var SalesByCategoryService;
        (function (SalesByCategoryService) {
            SalesByCategoryService.baseUrl = 'Northwind/SalesByCategory';
            [
                'List'
            ].forEach(function (x) {
                SalesByCategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalesByCategoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SalesByCategoryService = Northwind.SalesByCategoryService || (Northwind.SalesByCategoryService = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var ShipperColumns = /** @class */ (function () {
            function ShipperColumns() {
            }
            ShipperColumns.columnsKey = 'Northwind.Shipper';
            return ShipperColumns;
        }());
        Northwind.ShipperColumns = ShipperColumns;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var ShipperForm = /** @class */ (function (_super) {
            __extends(ShipperForm, _super);
            function ShipperForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ShipperForm.init) {
                    ShipperForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = Northwind.PhoneEditor;
                    Q.initFormType(ShipperForm, [
                        'CompanyName', w0,
                        'Phone', w1
                    ]);
                }
                return _this;
            }
            ShipperForm.formKey = 'Northwind.Shipper';
            return ShipperForm;
        }(Serenity.PrefixedContext));
        Northwind.ShipperForm = ShipperForm;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var ShipperRow;
        (function (ShipperRow) {
            ShipperRow.idProperty = 'ShipperID';
            ShipperRow.nameProperty = 'CompanyName';
            ShipperRow.localTextPrefix = 'Northwind.Shipper';
            ShipperRow.lookupKey = 'Northwind.Shipper';
            function getLookup() {
                return Q.getLookup('Northwind.Shipper');
            }
            ShipperRow.getLookup = getLookup;
            ShipperRow.deletePermission = 'Northwind:General';
            ShipperRow.insertPermission = 'Northwind:General';
            ShipperRow.readPermission = 'Northwind:General';
            ShipperRow.updatePermission = 'Northwind:General';
        })(ShipperRow = Northwind.ShipperRow || (Northwind.ShipperRow = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var ShipperService;
        (function (ShipperService) {
            ShipperService.baseUrl = 'Northwind/Shipper';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ShipperService[x] = function (r, s, o) {
                    return Q.serviceRequest(ShipperService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ShipperService = Northwind.ShipperService || (Northwind.ShipperService = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var SupplierColumns = /** @class */ (function () {
            function SupplierColumns() {
            }
            SupplierColumns.columnsKey = 'Northwind.Supplier';
            return SupplierColumns;
        }());
        Northwind.SupplierColumns = SupplierColumns;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var SupplierForm = /** @class */ (function (_super) {
            __extends(SupplierForm, _super);
            function SupplierForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SupplierForm.init) {
                    SupplierForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(SupplierForm, [
                        'CompanyName', w0,
                        'ContactName', w0,
                        'ContactTitle', w0,
                        'Address', w0,
                        'Region', w0,
                        'PostalCode', w0,
                        'Country', w0,
                        'City', w0,
                        'Phone', w0,
                        'Fax', w0,
                        'HomePage', w0
                    ]);
                }
                return _this;
            }
            SupplierForm.formKey = 'Northwind.Supplier';
            return SupplierForm;
        }(Serenity.PrefixedContext));
        Northwind.SupplierForm = SupplierForm;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var SupplierRow;
        (function (SupplierRow) {
            SupplierRow.idProperty = 'SupplierID';
            SupplierRow.nameProperty = 'CompanyName';
            SupplierRow.localTextPrefix = 'Northwind.Supplier';
            SupplierRow.lookupKey = 'Northwind.Supplier';
            function getLookup() {
                return Q.getLookup('Northwind.Supplier');
            }
            SupplierRow.getLookup = getLookup;
            SupplierRow.deletePermission = 'Northwind:General';
            SupplierRow.insertPermission = 'Northwind:General';
            SupplierRow.readPermission = 'Northwind:General';
            SupplierRow.updatePermission = 'Northwind:General';
        })(SupplierRow = Northwind.SupplierRow || (Northwind.SupplierRow = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var SupplierService;
        (function (SupplierService) {
            SupplierService.baseUrl = 'Northwind/Supplier';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SupplierService[x] = function (r, s, o) {
                    return Q.serviceRequest(SupplierService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SupplierService = Northwind.SupplierService || (Northwind.SupplierService = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var TerritoryColumns = /** @class */ (function () {
            function TerritoryColumns() {
            }
            TerritoryColumns.columnsKey = 'Northwind.Territory';
            return TerritoryColumns;
        }());
        Northwind.TerritoryColumns = TerritoryColumns;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var TerritoryForm = /** @class */ (function (_super) {
            __extends(TerritoryForm, _super);
            function TerritoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TerritoryForm.init) {
                    TerritoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    Q.initFormType(TerritoryForm, [
                        'TerritoryID', w0,
                        'TerritoryDescription', w0,
                        'RegionID', w1
                    ]);
                }
                return _this;
            }
            TerritoryForm.formKey = 'Northwind.Territory';
            return TerritoryForm;
        }(Serenity.PrefixedContext));
        Northwind.TerritoryForm = TerritoryForm;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var TerritoryRow;
        (function (TerritoryRow) {
            TerritoryRow.idProperty = 'ID';
            TerritoryRow.nameProperty = 'TerritoryID';
            TerritoryRow.localTextPrefix = 'Northwind.Territory';
            TerritoryRow.lookupKey = 'Northwind.Territory';
            function getLookup() {
                return Q.getLookup('Northwind.Territory');
            }
            TerritoryRow.getLookup = getLookup;
            TerritoryRow.deletePermission = 'Northwind:General';
            TerritoryRow.insertPermission = 'Northwind:General';
            TerritoryRow.readPermission = 'Northwind:General';
            TerritoryRow.updatePermission = 'Northwind:General';
        })(TerritoryRow = Northwind.TerritoryRow || (Northwind.TerritoryRow = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var TerritoryService;
        (function (TerritoryService) {
            TerritoryService.baseUrl = 'Northwind/Territory';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TerritoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(TerritoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TerritoryService = Northwind.TerritoryService || (Northwind.TerritoryService = {}));
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Texts;
    (function (Texts) {
        MiMovieTutorial['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, INSUDE: { Alumnos: { Apellidos: 1, Ciudad: 1, CorreoElectronico: 1, CreateDate: 1, CreateUser: 1, Direccion: 1, DireccionOficina: 1, DpMatricula: 1, EcMatricula: 1, Estado: 1, EstadoCivil: 1, FechaIngreso: 1, FechaNacimiento: 1, FechaRegistro: 1, Funcion: 1, IdAlumno: 1, IdDependencia: 1, IdDependenciaNombre: 1, IdEstadoCivilNombre: 1, IdInstitucion: 1, IdInstitucionCreateDate: 1, IdInstitucionCreateUser: 1, IdInstitucionIdCompania: 1, IdInstitucionNombre: 1, IdNacionalidad: 1, IdNacionalidadCreateDate: 1, IdNacionalidadCreateUser: 1, IdNacionalidadEstado: 1, IdNacionalidadNombre: 1, IdPais: 1, IdPaisCreateDate: 1, IdPaisCreateUser: 1, IdPaisEstado: 1, IdPaisNombre: 1, IdRango: 1, IdRangoNombre: 1, IdSexoNombre: 1, IdUsuario: 1, Identificacion: 1, LastUpdatedAt: 1, LugarNacimiento: 1, Matricula: 1, Nombres: 1, Observaciones: 1, Sexo: 1, TelCelular: 1, TelHogar: 1, TelOficina: 1, Tipo: 1, TipoIdentificacion: 1, lstCarreras: 1 }, AlumnosCarreras: { Becado: 1, CreateDate: 1, Estado: 1, Fecha: 1, FechaGraduacion: 1, Folio: 1, IdAlumno: 1, IdAlumnoApellidos: 1, IdAlumnoCarrera: 1, IdAlumnoCiudad: 1, IdAlumnoCorreoElectronico: 1, IdAlumnoCreateDate: 1, IdAlumnoCreateUser: 1, IdAlumnoDireccion: 1, IdAlumnoDireccionOficina: 1, IdAlumnoDpMatricula: 1, IdAlumnoEcMatricula: 1, IdAlumnoEstado: 1, IdAlumnoEstadoCivil: 1, IdAlumnoFechaIngreso: 1, IdAlumnoFechaNacimiento: 1, IdAlumnoFechaRegistro: 1, IdAlumnoFuncion: 1, IdAlumnoIdDependencia: 1, IdAlumnoIdInstitucion: 1, IdAlumnoIdNacionalidad: 1, IdAlumnoIdPais: 1, IdAlumnoIdRango: 1, IdAlumnoIdUsuario: 1, IdAlumnoIdentificacion: 1, IdAlumnoLastUpdatedAt: 1, IdAlumnoLugarNacimiento: 1, IdAlumnoMatricula: 1, IdAlumnoNombres: 1, IdAlumnoObservaciones: 1, IdAlumnoSexo: 1, IdAlumnoTelCelular: 1, IdAlumnoTelHogar: 1, IdAlumnoTelOficina: 1, IdAlumnoTipo: 1, IdAlumnoTipoIdentificacion: 1, IdPensum: 1, IdPensumCodigo: 1, IdPensumCreateDate: 1, IdPensumCreateUser: 1, IdPensumEstado: 1, IdPensumIdTitulo: 1, IdPensumLastUpdatedAt: 1, IdPensumNombre: 1, IdPromocion: 1, IdPromocionCreateDate: 1, IdPromocionDescripcion: 1, IdPromocionEstado: 1, IdPromocionIdTitulo: 1, IdPromocionLastUpdatedAt: 1, IdPromocionYearFin: 1, IdPromocionYearInicio: 1, IdTitulo: 1, IdTituloCicloAcademico: 1, IdTituloCodigo: 1, IdTituloCosto: 1, IdTituloCostoCredito: 1, IdTituloCreateDate: 1, IdTituloCreateUser: 1, IdTituloEstado: 1, IdTituloIdEscuela: 1, IdTituloIdPensum: 1, IdTituloIdRequisitoExtrangero: 1, IdTituloIdRequisitoNacional: 1, IdTituloMencion: 1, IdTituloMontoInscripcion: 1, IdTituloNivel: 1, IdTituloNombre: 1, IdTituloTipoMatricula: 1, IdTituloTituloOtorgado: 1, LastUpdatedAt: 1, Libro: 1, NoRegistro: 1, Numero: 1, Promocion: 1 }, AlumnosFamiliares: { CreateDate: 1, CreateUser: 1, IdAlumno: 1, IdAlumnoApellidos: 1, IdAlumnoCiudad: 1, IdAlumnoCorreoElectronico: 1, IdAlumnoCreateDate: 1, IdAlumnoCreateUser: 1, IdAlumnoDireccion: 1, IdAlumnoDireccionOficina: 1, IdAlumnoDpMatricula: 1, IdAlumnoEcMatricula: 1, IdAlumnoEstado: 1, IdAlumnoEstadoCivil: 1, IdAlumnoFamiliar: 1, IdAlumnoFechaIngreso: 1, IdAlumnoFechaNacimiento: 1, IdAlumnoFechaRegistro: 1, IdAlumnoFuncion: 1, IdAlumnoIdDependencia: 1, IdAlumnoIdInstitucion: 1, IdAlumnoIdNacionalidad: 1, IdAlumnoIdPais: 1, IdAlumnoIdRango: 1, IdAlumnoIdUsuario: 1, IdAlumnoIdentificacion: 1, IdAlumnoLastUpdatedAt: 1, IdAlumnoLugarNacimiento: 1, IdAlumnoMatricula: 1, IdAlumnoNombres: 1, IdAlumnoObservaciones: 1, IdAlumnoSexo: 1, IdAlumnoTelCelular: 1, IdAlumnoTelHogar: 1, IdAlumnoTelOficina: 1, IdAlumnoTipo: 1, IdAlumnoTipoIdentificacion: 1, Nombres: 1, Parentesco: 1, Telefono: 1 }, Compania: { Correo: 1, Direccion: 1, Fax: 1, IdCompania: 1, Logo: 1, Nombre: 1, Rnc: 1, Siglas: 1, Telefono: 1, Website: 1 }, Dependencias: { IdDependencia: 1, Nombre: 1 }, Escuelas: { Contacto: 1, CreateDate: 1, CreateUser: 1, Direccion: 1, Estado: 1, IdEscuela: 1, IdInstitucion: 1, IdInstitucionCreateDate: 1, IdInstitucionCreateUser: 1, IdInstitucionIdCompania: 1, IdInstitucionNombre: 1, Nombre: 1, Siglas: 1, Telefono: 1 }, Estadocivil: { CodEstado: 1, NomEstado: 1 }, Existencialma: { Almacen: 1, AlmacenNomalmacen: 1, CodPro: 1, CodProDesPro: 1, CodProPrecio: 1, Existencia: 1, Sec: 1 }, Facultades: { CreateDate: 1, CreateUser: 1, IdCompania: 1, IdCompaniaCorreo: 1, IdCompaniaDireccion: 1, IdCompaniaFax: 1, IdCompaniaLogo: 1, IdCompaniaNombre: 1, IdCompaniaRnc: 1, IdCompaniaSiglas: 1, IdCompaniaTelefono: 1, IdCompaniaWebsite: 1, IdInstitucion: 1, Nombre: 1 }, Indices: { CreateDate: 1, CreateUser: 1, Descripcion: 1, IdIndice: 1, Literal: 1, Puntos: 1, Rango1: 1, Rango2: 1 }, Instructores: { Codigo: 1, CorreoElectronico: 1, CreateDate: 1, CreateUser: 1, Estado: 1, FechaIngreso: 1, IdInstructor: 1, IdUsuario: 1, Identificacion: 1, LastUpdatedAt: 1, NivelAcademico: 1, Nombres: 1, Sexo: 1, Telefono: 1, TipoIdentificacion: 1 }, Malmacen: { Almacenid: 1, Nomalmacen: 1 }, Materias: { Codigo: 1, CreateDate: 1, CreateUser: 1, Estado: 1, IdEscuela: 1, IdEscuelaContacto: 1, IdEscuelaCreateDate: 1, IdEscuelaCreateUser: 1, IdEscuelaDireccion: 1, IdEscuelaEstado: 1, IdEscuelaIdInstitucion: 1, IdEscuelaNombre: 1, IdEscuelaSiglas: 1, IdEscuelaTelefono: 1, IdMateria: 1, LastUpdatedAt: 1, Nombre: 1 }, Mproduct: { CodPro: 1, DesPro: 1, Precio: 1 }, Nacionalidad: { CreateDate: 1, CreateUser: 1, Estado: 1, IdNacionalidad: 1, Nombre: 1 }, NivelesPorCarrera: { CreateDate: 1, CreateUser: 1, IdTipoCalificacion: 1, IdTipoCalificacionCreateDate: 1, IdTipoCalificacionCreateUser: 1, IdTipoCalificacionNombre: 1, IdTitulo: 1, IdTituloCicloAcademico: 1, IdTituloCodigo: 1, IdTituloCosto: 1, IdTituloCostoCredito: 1, IdTituloCreateDate: 1, IdTituloCreateUser: 1, IdTituloEstado: 1, IdTituloIdEscuela: 1, IdTituloIdPensum: 1, IdTituloIdRequisitoExtrangero: 1, IdTituloIdRequisitoNacional: 1, IdTituloMencion: 1, IdTituloMontoInscripcion: 1, IdTituloNivel: 1, IdTituloNombre: 1, IdTituloTipoMatricula: 1, IdTituloTituloOtorgado: 1, Nombre: 1, Orden: 1 }, Pais: { CreateDate: 1, CreateUser: 1, Estado: 1, IdPais: 1, Nombre: 1 }, Pensum: { Codigo: 1, CreateDate: 1, CreateUser: 1, Estado: 1, IdPensum: 1, IdStatus: 1, IdStatusNombre: 1, IdTitulo: 1, IdTituloCicloAcademico: 1, IdTituloCodigo: 1, IdTituloCosto: 1, IdTituloCostoCredito: 1, IdTituloCreateDate: 1, IdTituloCreateUser: 1, IdTituloEstado: 1, IdTituloIdEscuela: 1, IdTituloIdPensum: 1, IdTituloIdRequisitoExtrangero: 1, IdTituloIdRequisitoNacional: 1, IdTituloMencion: 1, IdTituloMontoInscripcion: 1, IdTituloNombre: 1, IdTituloTipoMatricula: 1, IdTituloTituloOtorgado: 1, LastUpdatedAt: 1, Nombre: 1 }, Privilegios: { CreateDate: 1, CreateUser: 1, Descripcion: 1, IdRol: 1, LastUpdatedAt: 1, Rol: 1, TipoUsuario: 1 }, Promociones: { CreateDate: 1, Descripcion: 1, Estado: 1, IdPromocion: 1, IdTitulo: 1, IdTituloCicloAcademico: 1, IdTituloCodigo: 1, IdTituloCosto: 1, IdTituloCostoCredito: 1, IdTituloCreateDate: 1, IdTituloCreateUser: 1, IdTituloEstado: 1, IdTituloIdEscuela: 1, IdTituloIdPensum: 1, IdTituloIdRequisitoExtrangero: 1, IdTituloIdRequisitoNacional: 1, IdTituloMencion: 1, IdTituloMontoInscripcion: 1, IdTituloNombre: 1, IdTituloTipoMatricula: 1, IdTituloTituloOtorgado: 1, LastUpdatedAt: 1, YearFin: 1, YearInicio: 1 }, Rangos: { IdRango: 1, Nombre: 1 }, Requisitos: { CreateDate: 1, CreateUser: 1, IdRequisito: 1, Nombre: 1 }, ServiciosEstudiantiles: { CreateDate: 1, CreateUser: 1, Descripcion: 1, Id: 1, LastUpdatedAt: 1 }, Sexo: { Codsexo: 1, Nomsexo: 1 }, Status: { IdStatus: 1, NomStatus: 1 }, TipoDeCalificacion: { CreateDate: 1, CreateUser: 1, IdTipoCalificacion: 1, Nombre: 1 }, Titulos: { CicloAcademico: 1, Codigo: 1, Costo: 1, CostoCredito: 1, CreateDate: 1, CreateUser: 1, Estado: 1, IdEscuela: 1, IdEscuelaContacto: 1, IdEscuelaCreateDate: 1, IdEscuelaCreateUser: 1, IdEscuelaDireccion: 1, IdEscuelaEstado: 1, IdEscuelaIdInstitucion: 1, IdEscuelaNombre: 1, IdEscuelaSiglas: 1, IdEscuelaTelefono: 1, IdPensum: 1, IdRequisitoExtrangero: 1, IdRequisitoExtrangeroCreateDate: 1, IdRequisitoExtrangeroCreateUser: 1, IdRequisitoExtrangeroNombre: 1, IdRequisitoNacional: 1, IdRequisitoNacionalCreateDate: 1, IdRequisitoNacionalCreateUser: 1, IdRequisitoNacionalNombre: 1, IdTitulo: 1, Mencion: 1, MontoInscripcion: 1, Nombre: 1, TipoMatricula: 1, TituloOtorgado: 1 } }, MovieDB: { Genre: { GenreId: 1, Name: 1 }, Movie: { CastList: 1, Description: 1, GalleryImages: 1, GenreList: 1, Kind: 1, MovieId: 1, PrimaryImage: 1, ReleaseDate: 1, Runtime: 1, Storyline: 1, Title: 1, Year: 1 }, MovieCast: { Character: 1, MovieCastId: 1, MovieDescription: 1, MovieId: 1, MovieKind: 1, MovieReleaseDate: 1, MovieRuntime: 1, MovieStoryline: 1, MovieTitle: 1, MovieYear: 1, PersonBirthDate: 1, PersonBirthPlace: 1, PersonFirstname: 1, PersonFullname: 1, PersonGender: 1, PersonHeight: 1, PersonId: 1, PersonLastname: 1 }, MovieGenres: { GenreId: 1, GenreName: 1, MovieDescription: 1, MovieGenreId: 1, MovieId: 1, MovieKind: 1, MovieReleaseDate: 1, MovieRuntime: 1, MovieStoryline: 1, MovieTitle: 1, MovieYear: 1 }, Person: { BirthDate: 1, BirthPlace: 1, Firstname: 1, Fullname: 1, GalleryImages: 1, Gender: 1, Height: 1, Lastname: 1, PersonId: 1, PrimaryImage: 1 } }, Northwind: { Category: { CategoryID: 1, CategoryName: 1, Description: 1, Picture: 1 }, CategoryLang: { CategoryId: 1, CategoryName: 1, Description: 1, Id: 1, LanguageId: 1 }, Customer: { Address: 1, City: 1, CompanyName: 1, ContactName: 1, ContactTitle: 1, Country: 1, CustomerID: 1, Email: 1, Fax: 1, ID: 1, LastContactDate: 1, LastContactedBy: 1, NoteList: 1, Phone: 1, PostalCode: 1, Region: 1, Representatives: 1, SendBulletin: 1 }, CustomerCustomerDemo: { CustomerAddress: 1, CustomerCity: 1, CustomerCompanyName: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountry: 1, CustomerFax: 1, CustomerID: 1, CustomerPhone: 1, CustomerPostalCode: 1, CustomerRegion: 1, CustomerTypeCustomerDesc: 1, CustomerTypeID: 1, ID: 1 }, CustomerDemographic: { CustomerDesc: 1, CustomerTypeID: 1, ID: 1 }, CustomerDetails: { Email: 1, Id: 1, LastContactDate: 1, LastContactedBy: 1, LastContactedByAddress: 1, LastContactedByBirthDate: 1, LastContactedByCity: 1, LastContactedByCountry: 1, LastContactedByExtension: 1, LastContactedByFirstName: 1, LastContactedByHireDate: 1, LastContactedByHomePhone: 1, LastContactedByLastName: 1, LastContactedByNotes: 1, LastContactedByPhoto: 1, LastContactedByPhotoPath: 1, LastContactedByPostalCode: 1, LastContactedByRegion: 1, LastContactedByReportsTo: 1, LastContactedByTitle: 1, LastContactedByTitleOfCourtesy: 1, SendBulletin: 1 }, CustomerGrossSales: { ContactName: 1, CustomerId: 1, GrossAmount: 1, ProductId: 1, ProductName: 1 }, CustomerRepresentatives: { CustomerId: 1, EmployeeId: 1, RepresentativeId: 1 }, DragDropSample: { Id: 1, ParentId: 1, Title: 1 }, Employee: { Address: 1, BirthDate: 1, City: 1, Country: 1, EmployeeID: 1, Extension: 1, FirstName: 1, FullName: 1, Gender: 1, HireDate: 1, HomePhone: 1, LastName: 1, Notes: 1, Photo: 1, PhotoPath: 1, PostalCode: 1, Region: 1, ReportsTo: 1, ReportsToAddress: 1, ReportsToBirthDate: 1, ReportsToCity: 1, ReportsToCountry: 1, ReportsToExtension: 1, ReportsToFirstName: 1, ReportsToFullName: 1, ReportsToHireDate: 1, ReportsToHomePhone: 1, ReportsToLastName: 1, ReportsToNotes: 1, ReportsToPhoto: 1, ReportsToPhotoPath: 1, ReportsToPostalCode: 1, ReportsToRegion: 1, ReportsToReportsTo: 1, ReportsToTitle: 1, ReportsToTitleOfCourtesy: 1, Title: 1, TitleOfCourtesy: 1 }, EmployeeTerritory: { EmployeeAddress: 1, EmployeeBirthDate: 1, EmployeeCity: 1, EmployeeCountry: 1, EmployeeExtension: 1, EmployeeFirstName: 1, EmployeeHireDate: 1, EmployeeHomePhone: 1, EmployeeID: 1, EmployeeLastName: 1, EmployeeNotes: 1, EmployeePhoto: 1, EmployeePhotoPath: 1, EmployeePostalCode: 1, EmployeeRegion: 1, EmployeeReportsTo: 1, EmployeeTitle: 1, EmployeeTitleOfCourtesy: 1, TerritoryID: 1, TerritoryRegionID: 1, TerritoryTerritoryDescription: 1 }, Note: { EntityId: 1, EntityType: 1, InsertDate: 1, InsertUserDisplayName: 1, InsertUserId: 1, NoteId: 1, Text: 1 }, Order: { CustomerCity: 1, CustomerCompanyName: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountry: 1, CustomerFax: 1, CustomerID: 1, CustomerPhone: 1, CustomerRegion: 1, DetailList: 1, EmployeeFullName: 1, EmployeeGender: 1, EmployeeID: 1, EmployeeReportsToFullName: 1, Freight: 1, OrderDate: 1, OrderID: 1, RequiredDate: 1, ShipAddress: 1, ShipCity: 1, ShipCountry: 1, ShipName: 1, ShipPostalCode: 1, ShipRegion: 1, ShipVia: 1, ShipViaCompanyName: 1, ShipViaPhone: 1, ShippedDate: 1, ShippingState: 1 }, OrderDetail: { DetailID: 1, Discount: 1, LineTotal: 1, OrderCustomerID: 1, OrderDate: 1, OrderEmployeeID: 1, OrderID: 1, OrderShipCity: 1, OrderShipCountry: 1, OrderShipVia: 1, OrderShippedDate: 1, ProductDiscontinued: 1, ProductID: 1, ProductName: 1, ProductQuantityPerUnit: 1, ProductSupplierID: 1, ProductUnitPrice: 1, Quantity: 1, UnitPrice: 1 }, Product: { CategoryDescription: 1, CategoryID: 1, CategoryName: 1, CategoryPicture: 1, Discontinued: 1, ProductID: 1, ProductImage: 1, ProductName: 1, QuantityPerUnit: 1, ReorderLevel: 1, SupplierAddress: 1, SupplierCity: 1, SupplierCompanyName: 1, SupplierContactName: 1, SupplierContactTitle: 1, SupplierCountry: 1, SupplierFax: 1, SupplierHomePage: 1, SupplierID: 1, SupplierPhone: 1, SupplierPostalCode: 1, SupplierRegion: 1, UnitPrice: 1, UnitsInStock: 1, UnitsOnOrder: 1 }, ProductLang: { Id: 1, LanguageId: 1, ProductId: 1, ProductName: 1 }, ProductLog: { CategoryID: 1, ChangingUserId: 1, Discontinued: 1, OperationType: 1, ProductID: 1, ProductImage: 1, ProductLogID: 1, ProductName: 1, QuantityPerUnit: 1, ReorderLevel: 1, SupplierID: 1, UnitPrice: 1, UnitsInStock: 1, UnitsOnOrder: 1, ValidFrom: 1, ValidUntil: 1 }, Region: { RegionDescription: 1, RegionID: 1 }, SalesByCategory: { CategoryId: 1, CategoryName: 1, ProductName: 1, ProductSales: 1 }, Shipper: { CompanyName: 1, Phone: 1, ShipperID: 1 }, Supplier: { Address: 1, City: 1, CompanyName: 1, ContactName: 1, ContactTitle: 1, Country: 1, Fax: 1, HomePage: 1, Phone: 1, PostalCode: 1, Region: 1, SupplierID: 1 }, Territory: { ID: 1, RegionDescription: 1, RegionID: 1, TerritoryDescription: 1, TerritoryID: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Navigation: { LogoutLink: 1, SiteTitle: 1 }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, NorthwindPhone: 1, NorthwindPhoneMultiple: 1, SavePrimaryKeyError: 1 } });
    })(Texts = MiMovieTutorial.Texts || (MiMovieTutorial.Texts = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Web;
    (function (Web) {
        var Modules;
        (function (Modules) {
            var MovieDB;
            (function (MovieDB) {
                var Movie;
                (function (Movie) {
                    var MovieKind;
                    (function (MovieKind) {
                        MovieKind[MovieKind["Film"] = 1] = "Film";
                        MovieKind[MovieKind["TvSeries"] = 2] = "TvSeries";
                        MovieKind[MovieKind["MiniSeries"] = 3] = "MiniSeries";
                    })(MovieKind = Movie.MovieKind || (Movie.MovieKind = {}));
                    Serenity.Decorators.registerEnumType(MovieKind, 'MiMovieTutorial.Web.Modules.MovieDB.Movie.MovieKind', 'MovieDB.MovieKind');
                })(Movie = MovieDB.Movie || (MovieDB.Movie = {}));
            })(MovieDB = Modules.MovieDB || (Modules.MovieDB = {}));
        })(Modules = Web.Modules || (Web.Modules = {}));
    })(Web = MiMovieTutorial.Web || (MiMovieTutorial.Web = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            return Q.Authorization.hasPermission(permissionKey);
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = MiMovieTutorial.Authorization || (MiMovieTutorial.Authorization = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys');
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = MiMovieTutorial.Administration || (MiMovieTutorial.Administration = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var ChartInDialog = /** @class */ (function (_super) {
            __extends(ChartInDialog, _super);
            function ChartInDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ChartInDialog_1 = ChartInDialog;
            ChartInDialog.initializePage = function () {
                $(function () {
                    $('#LaunchDialogButton').click(function (e) {
                        (new ChartInDialog_1()).dialogOpen();
                    });
                });
            };
            ChartInDialog.prototype.onDialogOpen = function () {
                var _this = this;
                _super.prototype.onDialogOpen.call(this);
                BasicSamples.BasicSamplesService.OrdersByShipper({}, function (response) {
                    _this.areaChart = new Morris.Area({
                        element: _this.idPrefix + 'Chart',
                        resize: true, parseTime: false,
                        data: response.Values,
                        xkey: 'Month',
                        ykeys: response.ShipperKeys, labels: response.ShipperLabels, hideHover: 'auto'
                    });
                });
            };
            ChartInDialog.prototype.arrange = function () {
                _super.prototype.arrange.call(this);
                this.areaChart && this.areaChart.redraw();
            };
            ChartInDialog.prototype.getTemplate = function () {
                // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
                return "<div id='~_Chart'></div>";
            };
            ChartInDialog.prototype.getDialogOptions = function () {
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.title = 'Orders by Shipper';
                return opt;
            };
            var ChartInDialog_1;
            ChartInDialog = ChartInDialog_1 = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.resizable(),
                Serenity.Decorators.maximizable()
            ], ChartInDialog);
            return ChartInDialog;
        }(Serenity.TemplatedDialog));
        BasicSamples.ChartInDialog = ChartInDialog;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var ProductDialog = /** @class */ (function (_super) {
            __extends(ProductDialog, _super);
            function ProductDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.ProductForm(_this.idPrefix);
                return _this;
            }
            ProductDialog.prototype.getFormKey = function () { return Northwind.ProductForm.formKey; };
            ProductDialog.prototype.getIdProperty = function () { return Northwind.ProductRow.idProperty; };
            ProductDialog.prototype.getLocalTextPrefix = function () { return Northwind.ProductRow.localTextPrefix; };
            ProductDialog.prototype.getNameProperty = function () { return Northwind.ProductRow.nameProperty; };
            ProductDialog.prototype.getService = function () { return Northwind.ProductService.baseUrl; };
            ProductDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.maximizable()
            ], ProductDialog);
            return ProductDialog;
        }(Serenity.EntityDialog));
        Northwind.ProductDialog = ProductDialog;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Product/ProductDialog.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var CloneableEntityDialog = /** @class */ (function (_super) {
            __extends(CloneableEntityDialog, _super);
            function CloneableEntityDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CloneableEntityDialog.prototype.updateInterface = function () {
                // by default cloneButton is hidden in base UpdateInterface method
                _super.prototype.updateInterface.call(this);
                // here we show it if it is edit mode (not new)
                this.cloneButton.toggle(this.isEditMode());
            };
            /**
             * Overriding this method is optional to customize cloned entity
             */
            CloneableEntityDialog.prototype.getCloningEntity = function () {
                var clone = _super.prototype.getCloningEntity.call(this);
                // add (Clone) suffix if it's not already added
                var suffix = ' (Clone)';
                if (!Q.endsWith(clone.ProductName || '', suffix)) {
                    clone.ProductName = (clone.ProductName || '') + suffix;
                }
                // it's better to clear image for this sample
                // otherwise we would have to create a temporary copy of it
                // and upload
                clone.ProductImage = null;
                // let's clear fields not logical to be cloned
                clone.UnitsInStock = 0;
                clone.UnitsOnOrder = 0;
                return clone;
            };
            CloneableEntityDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.maximizable()
            ], CloneableEntityDialog);
            return CloneableEntityDialog;
        }(MiMovieTutorial.Northwind.ProductDialog));
        BasicSamples.CloneableEntityDialog = CloneableEntityDialog;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var ProductGrid = /** @class */ (function (_super) {
            __extends(ProductGrid, _super);
            function ProductGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.pendingChanges = {};
                _this.slickContainer.on('change', '.edit:input', function (e) { return _this.inputsChange(e); });
                return _this;
            }
            ProductGrid.prototype.getColumnsKey = function () { return "Northwind.Product"; };
            ProductGrid.prototype.getDialogType = function () { return Northwind.ProductDialog; };
            ProductGrid.prototype.getIdProperty = function () { return Northwind.ProductRow.idProperty; };
            ProductGrid.prototype.getLocalTextPrefix = function () { return Northwind.ProductRow.localTextPrefix; };
            ProductGrid.prototype.getService = function () { return Northwind.ProductService.baseUrl; };
            ProductGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(MiMovieTutorial.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Northwind.ProductService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(MiMovieTutorial.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    reportTitle: 'Product List',
                    columnTitles: {
                        'Discontinued': 'Dis.',
                    },
                    tableOptions: {
                        columnStyles: {
                            ProductID: {
                                columnWidth: 25,
                                halign: 'right'
                            },
                            Discountinued: {
                                columnWidth: 25
                            }
                        }
                    }
                }));
                buttons.push({
                    title: 'Save Changes',
                    cssClass: 'apply-changes-button disabled',
                    onClick: function (e) { return _this.saveClick(); },
                    separator: true
                });
                return buttons;
            };
            ProductGrid.prototype.onViewProcessData = function (response) {
                this.pendingChanges = {};
                this.setSaveButtonState();
                return _super.prototype.onViewProcessData.call(this, response);
            };
            // PLEASE NOTE! Inline editing in grids is not something Serenity supports nor recommends.
            // SlickGrid has some set of limitations, UI is very hard to use on some devices like mobile, 
            // custom widgets and validations are not possible, and as a bonus the code can become a mess.
            // 
            // This was just a sample how-to after much requests, and is not supported. 
            // This is all we can offer, please don't ask us to Guide you...
            /**
             * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
             * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
             * no event handlers to rendered cell contents
             */
            ProductGrid.prototype.numericInputFormatter = function (ctx) {
                var klass = 'edit numeric';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                if (pending && pending[ctx.column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, ctx.column.field);
                return "<input type='text' class='" + klass +
                    "' data-field='" + ctx.column.field +
                    "' value='" + Q.formatNumber(value, '0.##') + "'/>";
            };
            ProductGrid.prototype.stringInputFormatter = function (ctx) {
                var klass = 'edit string';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                var column = ctx.column;
                if (pending && pending[column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, column.field);
                return "<input type='text' class='" + klass +
                    "' data-field='" + column.field +
                    "' value='" + Q.attrEncode(value) +
                    "' maxlength='" + column.sourceItem.maxLength + "'/>";
            };
            /**
             * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
             */
            ProductGrid.prototype.selectFormatter = function (ctx, idField, lookup) {
                var klass = 'edit';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                var column = ctx.column;
                if (pending && pending[idField] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, idField);
                var markup = "<select class='" + klass +
                    "' data-field='" + idField +
                    "' style='width: 100%; max-width: 100%'>";
                for (var _i = 0, _a = lookup.items; _i < _a.length; _i++) {
                    var c = _a[_i];
                    var id = c[lookup.idField];
                    markup += "<option value='" + Q.attrEncode(id) + "'";
                    if (id == value) {
                        markup += " selected";
                    }
                    markup += ">" + Q.htmlEncode(c[lookup.textField]) + "</option>";
                }
                return markup + "</select>";
            };
            ProductGrid.prototype.getEffectiveValue = function (item, field) {
                var pending = this.pendingChanges[item.ProductID];
                if (pending && pending[field] !== undefined) {
                    return pending[field];
                }
                return item[field];
            };
            ProductGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                var num = function (ctx) { return _this.numericInputFormatter(ctx); };
                var str = function (ctx) { return _this.stringInputFormatter(ctx); };
                Q.first(columns, function (x) { return x.field === 'QuantityPerUnit'; }).format = str;
                var category = Q.first(columns, function (x) { return x.field === "CategoryName" /* CategoryName */; });
                category.referencedFields = ["CategoryID" /* CategoryID */];
                category.format = function (ctx) { return _this.selectFormatter(ctx, "CategoryID" /* CategoryID */, Northwind.CategoryRow.getLookup()); };
                var supplier = Q.first(columns, function (x) { return x.field === "SupplierCompanyName" /* SupplierCompanyName */; });
                supplier.referencedFields = ["SupplierID" /* SupplierID */];
                supplier.format = function (ctx) { return _this.selectFormatter(ctx, "SupplierID" /* SupplierID */, Northwind.SupplierRow.getLookup()); };
                Q.first(columns, function (x) { return x.field === "UnitPrice" /* UnitPrice */; }).format = num;
                Q.first(columns, function (x) { return x.field === "UnitsInStock" /* UnitsInStock */; }).format = num;
                Q.first(columns, function (x) { return x.field === "UnitsOnOrder" /* UnitsOnOrder */; }).format = num;
                Q.first(columns, function (x) { return x.field === "ReorderLevel" /* ReorderLevel */; }).format = num;
                return columns;
            };
            ProductGrid.prototype.inputsChange = function (e) {
                var cell = this.slickGrid.getCellFromEvent(e);
                var item = this.itemAt(cell.row);
                var input = $(e.target);
                var field = input.data('field');
                var text = Q.coalesce(Q.trimToNull(input.val()), '0');
                var pending = this.pendingChanges[item.ProductID];
                var effective = this.getEffectiveValue(item, field);
                var oldText;
                if (input.hasClass("numeric"))
                    oldText = Q.formatNumber(effective, '0.##');
                else
                    oldText = effective;
                var value;
                if (field === 'UnitPrice') {
                    value = Q.parseDecimal(text);
                    if (value == null || isNaN(value)) {
                        Q.notifyError(Q.text('Validation.Decimal'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                }
                else if (input.hasClass("numeric")) {
                    var i = Q.parseInteger(text);
                    if (isNaN(i) || i > 32767 || i < 0) {
                        Q.notifyError(Q.text('Validation.Integer'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                    value = i;
                }
                else
                    value = text;
                if (!pending) {
                    this.pendingChanges[item.ProductID] = pending = {};
                }
                pending[field] = value;
                item[field] = value;
                this.view.refresh();
                if (input.hasClass("numeric"))
                    value = Q.formatNumber(value, '0.##');
                input.val(value).addClass('dirty');
                this.setSaveButtonState();
            };
            ProductGrid.prototype.setSaveButtonState = function () {
                this.toolbar.findButton('apply-changes-button').toggleClass('disabled', Object.keys(this.pendingChanges).length === 0);
            };
            ProductGrid.prototype.saveClick = function () {
                if (Object.keys(this.pendingChanges).length === 0) {
                    return;
                }
                // this calls save service for all modified rows, one by one
                // you could write a batch update service
                var keys = Object.keys(this.pendingChanges);
                var current = -1;
                var self = this;
                (function saveNext() {
                    if (++current >= keys.length) {
                        self.refresh();
                        return;
                    }
                    var key = keys[current];
                    var entity = Q.deepClone(self.pendingChanges[key]);
                    entity.ProductID = key;
                    Q.serviceRequest('Northwind/Product/Update', {
                        EntityId: key,
                        Entity: entity
                    }, function (response) {
                        delete self.pendingChanges[key];
                        saveNext();
                    });
                })();
            };
            ProductGrid.prototype.getQuickFilters = function () {
                var flt = _super.prototype.getQuickFilters.call(this);
                var q = Q.parseQueryString();
                if (q["cat"]) {
                    var category = Q.tryFirst(flt, function (x) { return x.field == "CategoryID"; });
                    category.init = function (e) {
                        e.element.getWidget(Serenity.LookupEditor).value = q["cat"];
                    };
                }
                return flt;
            };
            ProductGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], ProductGrid);
            return ProductGrid;
        }(Serenity.EntityGrid));
        Northwind.ProductGrid = ProductGrid;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
         */
        var CloneableEntityGrid = /** @class */ (function (_super) {
            __extends(CloneableEntityGrid, _super);
            function CloneableEntityGrid(container) {
                return _super.call(this, container) || this;
            }
            CloneableEntityGrid.prototype.getDialogType = function () { return BasicSamples.CloneableEntityDialog; };
            CloneableEntityGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CloneableEntityGrid);
            return CloneableEntityGrid;
        }(MiMovieTutorial.Northwind.ProductGrid));
        BasicSamples.CloneableEntityGrid = CloneableEntityGrid;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var OrderGrid = /** @class */ (function (_super) {
            __extends(OrderGrid, _super);
            function OrderGrid(container) {
                return _super.call(this, container) || this;
            }
            OrderGrid.prototype.getColumnsKey = function () { return "Northwind.Order"; };
            OrderGrid.prototype.getDialogType = function () { return Northwind.OrderDialog; };
            OrderGrid.prototype.getIdProperty = function () { return Northwind.OrderRow.idProperty; };
            OrderGrid.prototype.getLocalTextPrefix = function () { return Northwind.OrderRow.localTextPrefix; };
            OrderGrid.prototype.getService = function () { return Northwind.OrderService.baseUrl; };
            OrderGrid.prototype.getQuickFilters = function () {
                var _this = this;
                var filters = _super.prototype.getQuickFilters.call(this);
                filters.push({
                    type: Serenity.LookupEditor,
                    options: {
                        lookupKey: Northwind.ProductRow.lookupKey
                    },
                    field: 'ProductID',
                    title: 'Contains Product in Details',
                    handler: function (w) {
                        _this.view.params.ProductID = Q.toId(w.value);
                    },
                    cssClass: 'hidden-xs'
                });
                return filters;
            };
            OrderGrid.prototype.createQuickFilters = function () {
                _super.prototype.createQuickFilters.call(this);
                this.shippingStateFilter = this.findQuickFilter(Serenity.EnumEditor, "ShippingState" /* ShippingState */);
            };
            OrderGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(MiMovieTutorial.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Northwind.OrderService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(MiMovieTutorial.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            OrderGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    field: 'Print Invoice',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-invoice" title="invoice">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            OrderGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-invoice')) {
                        MiMovieTutorial.Common.ReportHelper.execute({
                            reportKey: 'Northwind.OrderDetail',
                            params: {
                                OrderID: item.OrderID
                            }
                        });
                    }
                }
            };
            OrderGrid.prototype.set_shippingState = function (value) {
                this.shippingStateFilter.value = value == null ? '' : value.toString();
            };
            OrderGrid.prototype.addButtonClick = function () {
                var eq = this.view.params.EqualityFilter;
                this.editItem({
                    CustomerID: eq ? eq.CustomerID : null
                });
            };
            OrderGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], OrderGrid);
            return OrderGrid;
        }(Serenity.EntityGrid));
        Northwind.OrderGrid = OrderGrid;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var DefaultValuesInNewGrid = /** @class */ (function (_super) {
            __extends(DefaultValuesInNewGrid, _super);
            function DefaultValuesInNewGrid(container) {
                return _super.call(this, container) || this;
            }
            /**
             * This method is called when New Item button is clicked.
             * By default, it calls EditItem with an empty entity.
             * This is a good place to fill in default values for New Item button.
             */
            DefaultValuesInNewGrid.prototype.addButtonClick = function () {
                this.editItem({
                    CustomerID: 'ANTON',
                    RequiredDate: Q.formatDate(new Date(), 'yyyy-MM-dd'),
                    EmployeeID: MiMovieTutorial.Northwind.EmployeeRow.getLookup().items
                        .filter(function (x) { return x.FullName === 'Robert King'; })[0].EmployeeID,
                    ShipVia: MiMovieTutorial.Northwind.ShipperRow.getLookup().items
                        .filter(function (x) { return x.CompanyName === 'Speedy Express'; })[0].ShipperID
                });
            };
            DefaultValuesInNewGrid.prototype.getButtons = function () {
                var _this = this;
                // preserving default New Item button
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: 'Add Order from the Queen',
                    cssClass: 'add-button',
                    onClick: function () {
                        // using EditItem method as a shortcut to create a new Order dialog,
                        // bind to its events, load our order row, and open dialog
                        _this.editItem({
                            CustomerID: 'QUEEN',
                            EmployeeID: MiMovieTutorial.Northwind.EmployeeRow.getLookup().items
                                .filter(function (x) { return x.FullName === 'Nancy Davolio'; })[0].EmployeeID,
                            ShipVia: MiMovieTutorial.Northwind.ShipperRow.getLookup().items
                                .filter(function (x) { return x.CompanyName === 'United Package'; })[0].ShipperID
                        });
                    }
                });
                buttons.push({
                    title: 'Add Order with 5 Chai by Laura', cssClass: 'add-note-button',
                    onClick: function () {
                        // we could use EditItem here too, but for demonstration
                        // purposes we are manually creating dialog this time
                        var dlg = new MiMovieTutorial.Northwind.OrderDialog();
                        // let grid watch for changes to manually created dialog, 
                        // so when a new item is saved, grid can refresh itself
                        _this.initDialog(dlg);
                        // get a reference to product Chai
                        var chai = MiMovieTutorial.Northwind.ProductRow.getLookup().items
                            .filter(function (x) { return x.ProductName === 'Chai'; })[0];
                        // LoadEntityAndOpenDialog, loads an OrderRow 
                        // to dialog and opens it
                        var lauraCallahanID = MiMovieTutorial.Northwind.EmployeeRow.getLookup().items
                            .filter(function (x) { return x.FullName === 'Laura Callahan'; })[0].EmployeeID;
                        dlg.loadEntityAndOpenDialog({
                            CustomerID: 'GOURL',
                            EmployeeID: lauraCallahanID,
                            DetailList: [{
                                    ProductID: chai.ProductID,
                                    ProductName: chai.ProductName,
                                    UnitPrice: chai.UnitPrice,
                                    Quantity: 5,
                                    LineTotal: chai.UnitPrice * 5
                                }]
                        });
                    }
                });
                return buttons;
            };
            DefaultValuesInNewGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DefaultValuesInNewGrid);
            return DefaultValuesInNewGrid;
        }(MiMovieTutorial.Northwind.OrderGrid));
        BasicSamples.DefaultValuesInNewGrid = DefaultValuesInNewGrid;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var DialogBoxes;
        (function (DialogBoxes) {
            function initializePage() {
                confirmDialogButtons();
                confirmWithCustomTitle();
                information();
                warning();
                alert();
                alertWithHtmlContent();
            }
            DialogBoxes.initializePage = initializePage;
            function confirmDialogButtons() {
                // here we demonstrate how you can detect which button user has clicked
                // second parameter is Yes handler and it is called only when user clicks Yes.
                // third parameter has some additional options, that you should only use when needed
                $('#ConfirmDialogButtons').click(function () {
                    Q.confirm("Click one of buttons, or close dialog with [x] on top right, i'll tell you what you did!", function () {
                        Q.notifySuccess("You clicked YES. Great!");
                    }, {
                        onNo: function () {
                            Q.notifyInfo("You clicked NO. Why?");
                        },
                        onCancel: function () {
                            Q.notifyError("You clicked X. Operation is cancelled. Will try again?");
                        }
                    });
                });
            }
            function confirmWithCustomTitle() {
                $('#ConfirmWithCustomTitle').click(function () {
                    Q.confirm("This confirmation has a custom title", function () {
                        Q.notifySuccess("Allright!");
                    }, {
                        title: 'Some Custom Confirmation Title'
                    });
                });
            }
            function information() {
                $('#Information').click(function () {
                    Q.information("What a nice day", function () {
                        Q.notifySuccess("No problem!");
                    });
                });
            }
            function warning() {
                $('#Warning').click(function () {
                    Q.warning("Hey, be careful!");
                });
            }
            function alert() {
                $('#Alert').click(function () {
                    Q.alert("Houston, we got a problem!");
                });
            }
            function alertWithHtmlContent() {
                $('#AlertWithHtmlContent').click(function () {
                    Q.alert("<h4>Here is some HTML content!</h4>" +
                        "<ul><li>Item 1</li><li>Item 2</li >" +
                        "<li>Visit <a href='http://serenity.is/' target='_blank' style='color: #ddf'>http://serenity.is/</a>!</li></ul>", {
                        htmlEncode: false
                    });
                });
            }
        })(DialogBoxes = BasicSamples.DialogBoxes || (BasicSamples.DialogBoxes = {}));
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var OrderDialog = /** @class */ (function (_super) {
            __extends(OrderDialog, _super);
            function OrderDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.OrderForm(_this.idPrefix);
                return _this;
            }
            OrderDialog.prototype.getFormKey = function () { return Northwind.OrderForm.formKey; };
            OrderDialog.prototype.getIdProperty = function () { return Northwind.OrderRow.idProperty; };
            OrderDialog.prototype.getLocalTextPrefix = function () { return Northwind.OrderRow.localTextPrefix; };
            OrderDialog.prototype.getNameProperty = function () { return Northwind.OrderRow.nameProperty; };
            OrderDialog.prototype.getService = function () { return Northwind.OrderService.baseUrl; };
            OrderDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(MiMovieTutorial.Common.ReportHelper.createToolButton({
                    title: 'Invoice',
                    cssClass: 'export-pdf-button',
                    reportKey: 'Northwind.OrderDetail',
                    getParams: function () { return ({
                        OrderID: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            OrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            };
            OrderDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], OrderDialog);
            return OrderDialog;
        }(Serenity.EntityDialog));
        Northwind.OrderDialog = OrderDialog;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Order/OrderDialog.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * A version of order dialog converted to a panel by adding Serenity.Decorators.panel decorator.
         */
        var EntityDialogAsPanel = /** @class */ (function (_super) {
            __extends(EntityDialogAsPanel, _super);
            function EntityDialogAsPanel() {
                return _super.call(this) || this;
            }
            EntityDialogAsPanel.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            EntityDialogAsPanel.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
            };
            EntityDialogAsPanel = __decorate([
                Serenity.Decorators.panel()
            ], EntityDialogAsPanel);
            return EntityDialogAsPanel;
        }(MiMovieTutorial.Northwind.OrderDialog));
        BasicSamples.EntityDialogAsPanel = EntityDialogAsPanel;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var CategoryDialog = /** @class */ (function (_super) {
            __extends(CategoryDialog, _super);
            function CategoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.CategoryForm(_this.idPrefix);
                return _this;
            }
            CategoryDialog.prototype.getFormKey = function () { return Northwind.CategoryForm.formKey; };
            CategoryDialog.prototype.getIdProperty = function () { return Northwind.CategoryRow.idProperty; };
            CategoryDialog.prototype.getLocalTextPrefix = function () { return Northwind.CategoryRow.localTextPrefix; };
            CategoryDialog.prototype.getNameProperty = function () { return Northwind.CategoryRow.nameProperty; };
            CategoryDialog.prototype.getService = function () { return Northwind.CategoryService.baseUrl; };
            CategoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryDialog);
            return CategoryDialog;
        }(Serenity.EntityDialog));
        Northwind.CategoryDialog = CategoryDialog;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Category/CategoryDialog.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var GetInsertedRecordIdDialog = /** @class */ (function (_super) {
            __extends(GetInsertedRecordIdDialog, _super);
            function GetInsertedRecordIdDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * This method is called after the save request to service
             * is completed succesfully. This can be an insert or update.
             *
             * @param response Response that is returned from server
             */
            GetInsertedRecordIdDialog.prototype.onSaveSuccess = function (response) {
                // check that this is an insert
                if (this.isNew()) {
                    Q.notifySuccess("Just inserted a category with ID: " + response.EntityId);
                    // you could also open a new dialog
                    // new Northwind.CategoryDialog().loadByIdAndOpenDialog(response.EntityId);
                    // but let's better load inserted record using Retrieve service
                    MiMovieTutorial.Northwind.CategoryService.Retrieve({
                        EntityId: response.EntityId
                    }, function (resp) {
                        Q.notifyInfo("Looks like the category you added has name: " + resp.Entity.CategoryName);
                    });
                }
            };
            GetInsertedRecordIdDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GetInsertedRecordIdDialog);
            return GetInsertedRecordIdDialog;
        }(MiMovieTutorial.Northwind.CategoryDialog));
        BasicSamples.GetInsertedRecordIdDialog = GetInsertedRecordIdDialog;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var CategoryGrid = /** @class */ (function (_super) {
            __extends(CategoryGrid, _super);
            function CategoryGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoryGrid.prototype.getColumnsKey = function () { return "Northwind.Category"; };
            CategoryGrid.prototype.getDialogType = function () { return Northwind.CategoryDialog; };
            CategoryGrid.prototype.getIdProperty = function () { return Northwind.CategoryRow.idProperty; };
            CategoryGrid.prototype.getLocalTextPrefix = function () { return Northwind.CategoryRow.localTextPrefix; };
            CategoryGrid.prototype.getService = function () { return Northwind.CategoryService.baseUrl; };
            CategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryGrid);
            return CategoryGrid;
        }(Serenity.EntityGrid));
        Northwind.CategoryGrid = CategoryGrid;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Category/CategoryGrid.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of CategoryGrid to override dialog type to GetInsertedRecordIdDialog
         */
        var GetInsertedRecordIdGrid = /** @class */ (function (_super) {
            __extends(GetInsertedRecordIdGrid, _super);
            function GetInsertedRecordIdGrid(container) {
                return _super.call(this, container) || this;
            }
            GetInsertedRecordIdGrid.prototype.getDialogType = function () { return BasicSamples.GetInsertedRecordIdDialog; };
            GetInsertedRecordIdGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GetInsertedRecordIdGrid);
            return GetInsertedRecordIdGrid;
        }(MiMovieTutorial.Northwind.CategoryGrid));
        BasicSamples.GetInsertedRecordIdGrid = GetInsertedRecordIdGrid;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Order/OrderDialog.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Styling for columns is done with CSS in site.basicsamples.less file.
         * When comparing this to MultiColumnDialog sample, you may notice that
         * this version requires much less JS and CSS code.
         */
        var MultiColumnResponsiveDialog = /** @class */ (function (_super) {
            __extends(MultiColumnResponsiveDialog, _super);
            function MultiColumnResponsiveDialog() {
                return _super.call(this) || this;
            }
            MultiColumnResponsiveDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MultiColumnResponsiveDialog);
            return MultiColumnResponsiveDialog;
        }(MiMovieTutorial.Northwind.OrderDialog));
        BasicSamples.MultiColumnResponsiveDialog = MultiColumnResponsiveDialog;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to MultiColumnResponsiveDialog
         */
        var MultiColumnResponsiveGrid = /** @class */ (function (_super) {
            __extends(MultiColumnResponsiveGrid, _super);
            function MultiColumnResponsiveGrid(container) {
                return _super.call(this, container) || this;
            }
            MultiColumnResponsiveGrid.prototype.getDialogType = function () { return BasicSamples.MultiColumnResponsiveDialog; };
            MultiColumnResponsiveGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MultiColumnResponsiveGrid);
            return MultiColumnResponsiveGrid;
        }(MiMovieTutorial.Northwind.OrderGrid));
        BasicSamples.MultiColumnResponsiveGrid = MultiColumnResponsiveGrid;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Order/OrderDialog.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
         */
        var OtherFormInTabDialog = /** @class */ (function (_super) {
            __extends(OtherFormInTabDialog, _super);
            function OtherFormInTabDialog() {
                var _this = _super.call(this) || this;
                // entity dialogs by default creates a property grid on element with ID "PropertyGrid".
                // here we explicitly create another, the customer property grid (vertical form) on element with ID "CustomerPropertyGrid".
                _this.customerPropertyGrid = new Serenity.PropertyGrid(_this.byId("CustomerPropertyGrid"), {
                    idPrefix: _this.idPrefix + "_Customer_",
                    items: Q.getForm(MiMovieTutorial.Northwind.CustomerForm.formKey).filter(function (x) { return x.name != 'CustomerID'; }),
                    useCategories: true
                });
                // this is just a helper to access editors if needed
                _this.customerForm = new MiMovieTutorial.Northwind.CustomerForm(_this.customerPropertyGrid.idPrefix);
                // initialize validator for customer form
                _this.customerValidator = _this.byId("CustomerForm").validate(Q.validateOptions({}));
                var selfChange = 0;
                // creating another toolbar for customer tab that will only save Customer
                new Serenity.Toolbar(_this.byId("CustomerToolbar"), {
                    buttons: [{
                            cssClass: "apply-changes-button",
                            title: Q.text("Controls.EntityDialog.SaveButton"),
                            onClick: function () {
                                var id = _this.getCustomerID();
                                if (!id)
                                    return;
                                if (!_this.customerValidator.form())
                                    return;
                                // prepare an empty entity to serialize customer details into
                                var c = {};
                                _this.customerPropertyGrid.save(c);
                                MiMovieTutorial.Northwind.CustomerService.Update({
                                    EntityId: id,
                                    Entity: c
                                }, function (response) {
                                    // reload customer list just in case
                                    Q.reloadLookup(MiMovieTutorial.Northwind.CustomerRow.lookupKey);
                                    // set flag that we are triggering customer select change event
                                    // otherwise active tab will change to first one
                                    selfChange++;
                                    try {
                                        // trigger change so that customer select updates its text
                                        // in case if Company Name is changed
                                        _this.form.CustomerID.element.change();
                                    }
                                    finally {
                                        selfChange--;
                                    }
                                    Q.notifySuccess("Saved customer details");
                                });
                            }
                        }]
                });
                _this.form.CustomerID.change(function (e) {
                    if (selfChange)
                        return;
                    var customerID = _this.getCustomerID();
                    Serenity.TabsExtensions.setDisabled(_this.tabs, 'Customer', !customerID);
                    if (!customerID) {
                        // no customer is selected, just load an empty entity
                        _this.customerPropertyGrid.load({});
                        return;
                    }
                    // load selected customer into customer form by calling CustomerService
                    MiMovieTutorial.Northwind.CustomerService.Retrieve({
                        EntityId: customerID
                    }, function (response) {
                        _this.customerPropertyGrid.load(response.Entity);
                    });
                });
                return _this;
            }
            OtherFormInTabDialog.prototype.getCustomerID = function () {
                var customerID = this.form.CustomerID.value;
                if (Q.isEmptyOrNull(customerID))
                    return null;
                // unfortunately, CustomerID (a string) used in this form and 
                // the ID (auto increment ID) are different, so we need to 
                // find numeric ID from customer lookups. 
                // you'll probably won't need this step.
                return Q.first(MiMovieTutorial.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == customerID; }).ID;
            };
            OtherFormInTabDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Customer', !this.getCustomerID());
            };
            OtherFormInTabDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OtherFormInTabDialog);
            return OtherFormInTabDialog;
        }(MiMovieTutorial.Northwind.OrderDialog));
        BasicSamples.OtherFormInTabDialog = OtherFormInTabDialog;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to OtherFormInTabDialog
         */
        var OtherFormInTabGrid = /** @class */ (function (_super) {
            __extends(OtherFormInTabGrid, _super);
            function OtherFormInTabGrid(container) {
                return _super.call(this, container) || this;
            }
            OtherFormInTabGrid.prototype.getDialogType = function () { return BasicSamples.OtherFormInTabDialog; };
            OtherFormInTabGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OtherFormInTabGrid);
            return OtherFormInTabGrid;
        }(MiMovieTutorial.Northwind.OrderGrid));
        BasicSamples.OtherFormInTabGrid = OtherFormInTabGrid;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Order/OrderDialog.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
         * With single toolbar for all forms
         */
        var OtherFormOneBarDialog = /** @class */ (function (_super) {
            __extends(OtherFormOneBarDialog, _super);
            function OtherFormOneBarDialog() {
                var _this = _super.call(this) || this;
                _this.selfChange = 0;
                // entity dialogs by default creates a property grid on element with ID "PropertyGrid".
                // here we explicitly create another, the customer property grid (vertical form) on element with ID "CustomerPropertyGrid".
                _this.customerPropertyGrid = new Serenity.PropertyGrid(_this.byId("CustomerPropertyGrid"), {
                    items: Q.getForm(MiMovieTutorial.Northwind.CustomerForm.formKey).filter(function (x) { return x.name != 'CustomerID'; }),
                    idPrefix: _this.idPrefix + "_Customer_",
                    useCategories: true
                });
                // this is just a helper to access editors if needed
                _this.customerForm = new MiMovieTutorial.Northwind.CustomerForm(_this.customerPropertyGrid.idPrefix);
                // initialize validator for customer form
                _this.customerValidator = _this.byId("CustomerForm").validate(Q.validateOptions({}));
                _this.form.CustomerID.change(function (e) {
                    if (_this.selfChange)
                        return;
                    var customerID = _this.getCustomerID();
                    Serenity.TabsExtensions.setDisabled(_this.tabs, 'Customer', !customerID);
                    if (!customerID) {
                        // no customer is selected, just load an empty entity
                        _this.customerPropertyGrid.load({});
                        return;
                    }
                    // load selected customer into customer form by calling CustomerService
                    MiMovieTutorial.Northwind.CustomerService.Retrieve({
                        EntityId: customerID
                    }, function (response) {
                        _this.customerPropertyGrid.load(response.Entity);
                    });
                });
                return _this;
            }
            OtherFormOneBarDialog.prototype.getCustomerID = function () {
                var customerID = this.form.CustomerID.value;
                if (Q.isEmptyOrNull(customerID))
                    return null;
                // unfortunately, CustomerID (a string) used in this form and 
                // the ID (auto increment ID) are different, so we need to 
                // find numeric ID from customer lookups. 
                // you'll probably won't need this step.
                return Q.first(MiMovieTutorial.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == customerID; }).ID;
            };
            OtherFormOneBarDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Customer', !this.getCustomerID());
            };
            // Save the customer and the order 
            OtherFormOneBarDialog.prototype.saveCustomer = function (callback, onSuccess) {
                var _this = this;
                var id = this.getCustomerID();
                if (!id) {
                    // If id of Customer isn't present, we save only Order entity
                    onSuccess(null);
                }
                else {
                    // Get current tab
                    var currTab = Serenity.TabsExtensions.activeTabKey(this.tabs);
                    // Select the correct tab and validate to see the error message in tab
                    Serenity.TabsExtensions.selectTab(this.tabs, "Customer");
                    if (!this.customerValidator.form()) {
                        return false;
                    }
                    // Re-select initial tab
                    Serenity.TabsExtensions.selectTab(this.tabs, currTab);
                    // prepare an empty entity to serialize customer details into
                    var c = {};
                    this.customerPropertyGrid.save(c);
                    MiMovieTutorial.Northwind.CustomerService.Update({
                        EntityId: id,
                        Entity: c
                    }, function (response) {
                        // reload customer list just in case
                        Q.reloadLookup(MiMovieTutorial.Northwind.CustomerRow.lookupKey);
                        // set flag that we are triggering customer select change event
                        // otherwise active tab will change to first one
                        _this.selfChange++;
                        try {
                            // trigger change so that customer select updates its text
                            // in case if Company Name is changed
                            _this.form.CustomerID.element.change();
                        }
                        finally {
                            _this.selfChange--;
                        }
                        onSuccess(response);
                    });
                }
                return true;
            };
            // Call super.save to save Order entity
            OtherFormOneBarDialog.prototype.saveOrder = function (callback) {
                _super.prototype.save.call(this, callback);
            };
            OtherFormOneBarDialog.prototype.saveAll = function (callback) {
                var _this = this;
                this.saveCustomer(callback, 
                // If customer successa, save Order entity
                function (resp) { return _this.saveOrder(callback); });
            };
            // This is called when save/update button is pressed
            OtherFormOneBarDialog.prototype.save = function (callback) {
                this.saveAll(callback);
            };
            OtherFormOneBarDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OtherFormOneBarDialog);
            return OtherFormOneBarDialog;
        }(MiMovieTutorial.Northwind.OrderDialog));
        BasicSamples.OtherFormOneBarDialog = OtherFormOneBarDialog;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to OtherFormInTabOneBarDialog
         */
        var OtherFormInTabOneBarGrid = /** @class */ (function (_super) {
            __extends(OtherFormInTabOneBarGrid, _super);
            function OtherFormInTabOneBarGrid(container) {
                return _super.call(this, container) || this;
            }
            OtherFormInTabOneBarGrid.prototype.getDialogType = function () { return BasicSamples.OtherFormOneBarDialog; };
            OtherFormInTabOneBarGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OtherFormInTabOneBarGrid);
            return OtherFormInTabOneBarGrid;
        }(MiMovieTutorial.Northwind.OrderGrid));
        BasicSamples.OtherFormInTabOneBarGrid = OtherFormInTabOneBarGrid;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var PopulateLinkedDataDialog = /** @class */ (function (_super) {
            __extends(PopulateLinkedDataDialog, _super);
            function PopulateLinkedDataDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.PopulateLinkedDataForm(_this.idPrefix);
                // "changeSelect2" is only fired when user changes the selection
                // but "change" is fired when dialog sets customer on load too
                // so we prefer "changeSelect2", as initial customer details 
                // will get populated by initial load, we don't want extra call
                _this.form.CustomerID.changeSelect2(function (e) {
                    var customerID = _this.form.CustomerID.value;
                    if (Q.isEmptyOrNull(customerID)) {
                        _this.setCustomerDetails({});
                        return;
                    }
                    // in northwind CustomerID is a string like "ALFKI", 
                    // while its actual integer ID value is 1.
                    // so we need to convert customer ID to ID.
                    // you won't have to do this conversion with your tables
                    var id = Q.first(MiMovieTutorial.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == customerID; }).ID;
                    MiMovieTutorial.Northwind.CustomerService.Retrieve({
                        EntityId: id
                    }, function (response) {
                        _this.setCustomerDetails(response.Entity);
                    });
                });
                return _this;
            }
            PopulateLinkedDataDialog.prototype.getFormKey = function () { return BasicSamples.PopulateLinkedDataForm.formKey; };
            PopulateLinkedDataDialog.prototype.getIdProperty = function () { return MiMovieTutorial.Northwind.OrderRow.idProperty; };
            PopulateLinkedDataDialog.prototype.getLocalTextPrefix = function () { return MiMovieTutorial.Northwind.OrderRow.localTextPrefix; };
            PopulateLinkedDataDialog.prototype.getNameProperty = function () { return MiMovieTutorial.Northwind.OrderRow.nameProperty; };
            PopulateLinkedDataDialog.prototype.getService = function () { return MiMovieTutorial.Northwind.OrderService.baseUrl; };
            PopulateLinkedDataDialog.prototype.setCustomerDetails = function (details) {
                this.form.CustomerCity.value = details.City;
                this.form.CustomerContactName.value = details.ContactName;
                this.form.CustomerContactTitle.value = details.ContactTitle;
                this.form.CustomerCountry.value = details.Country;
                this.form.CustomerFax.value = details.Fax;
                this.form.CustomerPhone.value = details.Phone;
                this.form.CustomerRegion.value = details.Region;
            };
            /**
             * This dialog will have CSS class "s-PopulateLinkedDataDialog"
             * We are changing it here to "s-OrderDialog", to make it use default OrderDialog styles
             * This has no effect other than looks on populate linked data demonstration
             */
            PopulateLinkedDataDialog.prototype.getCssClass = function () {
                return _super.prototype.getCssClass.call(this) + " s-OrderDialog s-Northwind-OrderDialog";
            };
            PopulateLinkedDataDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PopulateLinkedDataDialog);
            return PopulateLinkedDataDialog;
        }(Serenity.EntityDialog));
        BasicSamples.PopulateLinkedDataDialog = PopulateLinkedDataDialog;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * A subclass of OrderGrid that launches PopulateLinkedDataDialog
         */
        var PopulateLinkedDataGrid = /** @class */ (function (_super) {
            __extends(PopulateLinkedDataGrid, _super);
            function PopulateLinkedDataGrid(container) {
                return _super.call(this, container) || this;
            }
            PopulateLinkedDataGrid.prototype.getDialogType = function () { return BasicSamples.PopulateLinkedDataDialog; };
            PopulateLinkedDataGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PopulateLinkedDataGrid);
            return PopulateLinkedDataGrid;
        }(MiMovieTutorial.Northwind.OrderGrid));
        BasicSamples.PopulateLinkedDataGrid = PopulateLinkedDataGrid;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var SupplierDialog = /** @class */ (function (_super) {
            __extends(SupplierDialog, _super);
            function SupplierDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.SupplierForm(_this.idPrefix);
                return _this;
            }
            SupplierDialog.prototype.getFormKey = function () { return Northwind.SupplierForm.formKey; };
            SupplierDialog.prototype.getIdProperty = function () { return Northwind.SupplierRow.idProperty; };
            SupplierDialog.prototype.getLocalTextPrefix = function () { return Northwind.SupplierRow.localTextPrefix; };
            SupplierDialog.prototype.getNameProperty = function () { return Northwind.SupplierRow.nameProperty; };
            SupplierDialog.prototype.getService = function () { return Northwind.SupplierService.baseUrl; };
            SupplierDialog.prototype.getLanguages = function () {
                return MiMovieTutorial.LanguageList.getValue();
            };
            SupplierDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierDialog);
            return SupplierDialog;
        }(Serenity.EntityDialog));
        Northwind.SupplierDialog = SupplierDialog;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Supplier/SupplierDialog.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var ReadOnlyDialog = /** @class */ (function (_super) {
            __extends(ReadOnlyDialog, _super);
            function ReadOnlyDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * This is the method that gets list of tool
             * buttons to be created in a dialog.
             *
             * Here we'll remove save and close button, and
             * apply changes buttons.
             */
            ReadOnlyDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                // We could also remove delete button here, but for demonstration 
                // purposes we'll hide it in another method (updateInterface)
                // buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);
                return buttons;
            };
            /**
             * This method is a good place to update states of
             * interface elements. It is called after dialog
             * is initialized and an entity is loaded into dialog.
             * This is also called in new item mode.
             */
            ReadOnlyDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // finding all editor elements and setting their readonly attribute
                // note that this helper method only works with basic inputs, 
                // some editors require widget based set readonly overload (setReadOnly)
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                // remove required asterisk (*)
                this.element.find('sup').hide();
                // here is a way to locate a button by its css class
                // note that this method is not available in 
                // getToolbarButtons() because buttons are not 
                // created there yet!
                // 
                // this.toolbar.findButton('delete-button').hide();
                // entity dialog also has reference variables to
                // its default buttons, lets use them to hide delete button
                this.deleteButton.hide();
                // we could also hide save buttons just like delete button,
                // but they are null now as we removed them in getToolbarButtons()
                // if we didn't we could write like this:
                // 
                // this.applyChangesButton.hide();
                // this.saveAndCloseButton.hide();
                // instead of hiding, we could disable a button
                // 
                // this.deleteButton.toggleClass('disabled', true);
            };
            /**
             * This method is called when dialog title needs to be updated.
             * Base class returns something like 'Edit xyz' for edit mode,
             * and 'New xyz' for new record mode.
             *
             * But our dialog is readonly, so we should change it to 'View xyz'
             */
            ReadOnlyDialog.prototype.getEntityTitle = function () {
                if (!this.isEditMode()) {
                    // we shouldn't hit here, but anyway for demo...
                    return "How did you manage to open this dialog in new record mode?";
                }
                else {
                    // entitySingular is type of record this dialog edits. something like 'Supplier'.
                    // you could hardcode it, but this is for demonstration
                    var entityType = _super.prototype.getEntitySingular.call(this);
                    // get name field value of record this dialog edits
                    var name_1 = this.getEntityNameFieldValue() || "";
                    // you could use Q.format with a local text, but again demo...
                    return 'View ' + entityType + " (" + name_1 + ")";
                }
            };
            /**
             * This method is actually the one that calls getEntityTitle()
             * and updates the dialog title. We could do it here too...
             */
            ReadOnlyDialog.prototype.updateTitle = function () {
                _super.prototype.updateTitle.call(this);
                // remove super.updateTitle() call above and uncomment 
                // below line if you'd like to use this version
                // 
                // this.dialogTitle = 'View Supplier (' + this.getEntityNameFieldValue() + ')';
            };
            ReadOnlyDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ReadOnlyDialog);
            return ReadOnlyDialog;
        }(MiMovieTutorial.Northwind.SupplierDialog));
        BasicSamples.ReadOnlyDialog = ReadOnlyDialog;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var SupplierGrid = /** @class */ (function (_super) {
            __extends(SupplierGrid, _super);
            function SupplierGrid(container) {
                return _super.call(this, container) || this;
            }
            SupplierGrid.prototype.getColumnsKey = function () { return "Northwind.Supplier"; };
            SupplierGrid.prototype.getDialogType = function () { return Northwind.SupplierDialog; };
            SupplierGrid.prototype.getIdProperty = function () { return Northwind.SupplierRow.idProperty; };
            SupplierGrid.prototype.getLocalTextPrefix = function () { return Northwind.SupplierRow.localTextPrefix; };
            SupplierGrid.prototype.getService = function () { return Northwind.SupplierService.baseUrl; };
            SupplierGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierGrid);
            return SupplierGrid;
        }(Serenity.EntityGrid));
        Northwind.SupplierGrid = SupplierGrid;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Supplier/SupplierGrid.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * A readonly grid that launches ReadOnlyDialog
         */
        var ReadOnlyGrid = /** @class */ (function (_super) {
            __extends(ReadOnlyGrid, _super);
            function ReadOnlyGrid(container) {
                return _super.call(this, container) || this;
            }
            ReadOnlyGrid.prototype.getDialogType = function () { return BasicSamples.ReadOnlyDialog; };
            /**
             * Removing add button from grid using its css class
             */
            ReadOnlyGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            ReadOnlyGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReadOnlyGrid);
            return ReadOnlyGrid;
        }(MiMovieTutorial.Northwind.SupplierGrid));
        BasicSamples.ReadOnlyGrid = ReadOnlyGrid;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Adding Responsive attribute makes this dialog use full screen in mobile devices.
         */
        var ResponsiveDialog = /** @class */ (function (_super) {
            __extends(ResponsiveDialog, _super);
            function ResponsiveDialog() {
                return _super.call(this) || this;
            }
            ResponsiveDialog.prototype.getFormKey = function () { return MiMovieTutorial.Northwind.OrderForm.formKey; };
            ResponsiveDialog.prototype.getIdProperty = function () { return MiMovieTutorial.Northwind.OrderRow.idProperty; };
            ResponsiveDialog.prototype.getLocalTextPrefix = function () { return MiMovieTutorial.Northwind.OrderRow.localTextPrefix; };
            ResponsiveDialog.prototype.getNameProperty = function () { return MiMovieTutorial.Northwind.OrderRow.nameProperty; };
            ResponsiveDialog.prototype.getService = function () { return MiMovieTutorial.Northwind.OrderService.baseUrl; };
            ResponsiveDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive(),
                Serenity.Decorators.maximizable()
            ], ResponsiveDialog);
            return ResponsiveDialog;
        }(Serenity.EntityDialog));
        BasicSamples.ResponsiveDialog = ResponsiveDialog;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to ResponsiveDialog
         */
        var ResponsiveGrid = /** @class */ (function (_super) {
            __extends(ResponsiveGrid, _super);
            function ResponsiveGrid(container) {
                return _super.call(this, container) || this;
            }
            ResponsiveGrid.prototype.getDialogType = function () { return BasicSamples.ResponsiveDialog; };
            ResponsiveGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ResponsiveGrid);
            return ResponsiveGrid;
        }(MiMovieTutorial.Northwind.OrderGrid));
        BasicSamples.ResponsiveGrid = ResponsiveGrid;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var CustomerDialog = /** @class */ (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.CustomerForm(_this.idPrefix);
                _this.ordersGrid = new Northwind.CustomerOrdersGrid(_this.byId('OrdersGrid'));
                // force order dialog to open in Dialog mode instead of Panel mode
                // which is set as default on OrderDialog with @panelAttribute
                _this.ordersGrid.openDialogsAsPanel = false;
                _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                MiMovieTutorial.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            CustomerDialog.prototype.getFormKey = function () { return Northwind.CustomerForm.formKey; };
            CustomerDialog.prototype.getIdProperty = function () { return Northwind.CustomerRow.idProperty; };
            CustomerDialog.prototype.getLocalTextPrefix = function () { return Northwind.CustomerRow.localTextPrefix; };
            CustomerDialog.prototype.getNameProperty = function () { return Northwind.CustomerRow.nameProperty; };
            CustomerDialog.prototype.getService = function () { return Northwind.CustomerService.baseUrl; };
            CustomerDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            CustomerDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            CustomerDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Orders', this.isNewOrDeleted());
                this.ordersGrid.customerID = entity.CustomerID;
            };
            CustomerDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                Q.reloadLookup('Northwind.Customer');
            };
            CustomerDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], CustomerDialog);
            return CustomerDialog;
        }(Serenity.EntityDialog));
        Northwind.CustomerDialog = CustomerDialog;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Customer/CustomerDialog.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var SerialAutoNumberDialog = /** @class */ (function (_super) {
            __extends(SerialAutoNumberDialog, _super);
            function SerialAutoNumberDialog() {
                var _this = _super.call(this) || this;
                _this.form.CustomerID.element.on('keyup', function (e) {
                    // only auto number when a key between 'A' and 'Z' is pressed
                    if (e.which >= 65 && e.which <= 90)
                        _this.getNextNumber();
                });
                return _this;
            }
            SerialAutoNumberDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // fill next number in new record mode
                if (this.isNew())
                    this.getNextNumber();
            };
            SerialAutoNumberDialog.prototype.getNextNumber = function () {
                var _this = this;
                var val = Q.trimToNull(this.form.CustomerID.value);
                // we will only get next number when customer ID is empty or 1 character in length
                if (!val || val.length <= 1) {
                    // if no customer ID yet (new record mode probably) use 'C' as a prefix
                    var prefix = (val || 'C').toUpperCase();
                    // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                    MiMovieTutorial.Northwind.CustomerService.GetNextNumber({
                        Prefix: prefix,
                        Length: 5 // we want service to search for and return serials of 5 in length
                    }, function (response) {
                        _this.form.CustomerID.value = response.Serial;
                        // this is to mark numerical part after prefix
                        _this.form.CustomerID.element[0].setSelectionRange(prefix.length, response.Serial.length);
                    });
                }
            };
            SerialAutoNumberDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SerialAutoNumberDialog);
            return SerialAutoNumberDialog;
        }(MiMovieTutorial.Northwind.CustomerDialog));
        BasicSamples.SerialAutoNumberDialog = SerialAutoNumberDialog;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var CustomerGrid = /** @class */ (function (_super) {
            __extends(CustomerGrid, _super);
            function CustomerGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerGrid.prototype.getColumnsKey = function () { return "Northwind.Customer"; };
            CustomerGrid.prototype.getDialogType = function () { return Northwind.CustomerDialog; };
            CustomerGrid.prototype.getIdProperty = function () { return Northwind.CustomerRow.idProperty; };
            CustomerGrid.prototype.getLocalTextPrefix = function () { return Northwind.CustomerRow.localTextPrefix; };
            CustomerGrid.prototype.getService = function () { return Northwind.CustomerService.baseUrl; };
            CustomerGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(MiMovieTutorial.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Northwind/Customer/ListExcel',
                    separator: true
                }));
                buttons.push(MiMovieTutorial.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CustomerGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CustomerGrid);
            return CustomerGrid;
        }(Serenity.EntityGrid));
        Northwind.CustomerGrid = CustomerGrid;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Customer/CustomerGrid.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of CustomerGrid to override dialog type to SerialAutoNumberDialog
         */
        var SerialAutoNumberGrid = /** @class */ (function (_super) {
            __extends(SerialAutoNumberGrid, _super);
            function SerialAutoNumberGrid(container) {
                return _super.call(this, container) || this;
            }
            SerialAutoNumberGrid.prototype.getDialogType = function () { return BasicSamples.SerialAutoNumberDialog; };
            SerialAutoNumberGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SerialAutoNumberGrid);
            return SerialAutoNumberGrid;
        }(MiMovieTutorial.Northwind.CustomerGrid));
        BasicSamples.SerialAutoNumberGrid = SerialAutoNumberGrid;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = MiMovieTutorial.Common || (MiMovieTutorial.Common = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Common/Helpers/GridEditorDialog.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var ChangingLookupTextDialog = /** @class */ (function (_super) {
            __extends(ChangingLookupTextDialog, _super);
            function ChangingLookupTextDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.ChangingLookupTextForm(_this.idPrefix);
                _this.form.ProductID.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductID.value);
                    if (productID != null) {
                        _this.form.UnitPrice.value = MiMovieTutorial.Northwind.ProductRow.getLookup().itemById[productID].UnitPrice;
                    }
                });
                _this.form.Discount.addValidationRule(_this.uniqueName, function (e) {
                    var price = _this.form.UnitPrice.value;
                    var quantity = _this.form.Quantity.value;
                    var discount = _this.form.Discount.value;
                    if (price != null && quantity != null && discount != null &&
                        discount > 0 && discount >= price * quantity) {
                        return "Discount can't be higher than total price!";
                    }
                });
                return _this;
            }
            ChangingLookupTextDialog.prototype.getFormKey = function () { return BasicSamples.ChangingLookupTextForm.formKey; };
            ChangingLookupTextDialog.prototype.getLocalTextPrefix = function () { return MiMovieTutorial.Northwind.OrderDetailRow.localTextPrefix; };
            ChangingLookupTextDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('apply-changes-button').hide();
                this.toolbar.findButton('save-and-close-button').hide();
            };
            ChangingLookupTextDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangingLookupTextDialog);
            return ChangingLookupTextDialog;
        }(MiMovieTutorial.Common.GridEditorDialog));
        BasicSamples.ChangingLookupTextDialog = ChangingLookupTextDialog;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our custom product editor type
         */
        var ChangingLookupTextEditor = /** @class */ (function (_super) {
            __extends(ChangingLookupTextEditor, _super);
            function ChangingLookupTextEditor(container, options) {
                return _super.call(this, container, options) || this;
            }
            ChangingLookupTextEditor.prototype.getLookupKey = function () {
                return MiMovieTutorial.Northwind.ProductRow.lookupKey;
            };
            ChangingLookupTextEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) +
                    ' (' +
                    '$' + Q.formatNumber(item.UnitPrice, '#,##0.00') +
                    ', ' + (item.UnitsInStock > 0 ? (item.UnitsInStock + ' in stock') : 'out of stock') +
                    ', ' + (item.SupplierCompanyName || 'Unknown') +
                    ')';
            };
            ChangingLookupTextEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ChangingLookupTextEditor);
            return ChangingLookupTextEditor;
        }(Serenity.LookupEditorBase));
        BasicSamples.ChangingLookupTextEditor = ChangingLookupTextEditor;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailDialog = /** @class */ (function (_super) {
            __extends(OrderDetailDialog, _super);
            function OrderDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.OrderDetailForm(_this.idPrefix);
                _this.form.ProductID.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductID.value);
                    if (productID != null) {
                        _this.form.UnitPrice.value = Northwind.ProductRow.getLookup().itemById[productID].UnitPrice;
                    }
                });
                _this.form.Discount.addValidationRule(_this.uniqueName, function (e) {
                    var price = _this.form.UnitPrice.value;
                    var quantity = _this.form.Quantity.value;
                    var discount = _this.form.Discount.value;
                    if (price != null && quantity != null && discount != null &&
                        discount > 0 && discount >= price * quantity) {
                        return "Discount can't be higher than total price!";
                    }
                });
                return _this;
            }
            OrderDetailDialog.prototype.getFormKey = function () { return Northwind.OrderDetailForm.formKey; };
            OrderDetailDialog.prototype.getLocalTextPrefix = function () { return Northwind.OrderDetailRow.localTextPrefix; };
            OrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailDialog);
            return OrderDetailDialog;
        }(MiMovieTutorial.Common.GridEditorDialog));
        Northwind.OrderDetailDialog = OrderDetailDialog;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/OrderDetail/OrderDetailDialog.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our subclass of order detail dialog with a CategoryID property
         * that will be used to set CascadeValue of product editor
         */
        var FilteredLookupOrderDetailDialog = /** @class */ (function (_super) {
            __extends(FilteredLookupOrderDetailDialog, _super);
            function FilteredLookupOrderDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new MiMovieTutorial.Northwind.OrderDetailForm(_this.idPrefix);
                // we can set cascade field in constructor
                // we could also use FilterField but in this case, when CategoryID is null
                // lookup editor would show all products in any category
                _this.form.ProductID.cascadeField = "CategoryID" /* CategoryID */;
                return _this;
                // but CategoryID value is not yet available here as detail editor will set it 
                // after calling constructor (creating a detail dialog) so we'll use BeforeLoadEntity
            }
            /**
             * This method is called just before an entity is loaded to dialog
             * This is also called for new record mode with an empty entity
             */
            FilteredLookupOrderDetailDialog.prototype.beforeLoadEntity = function (entity) {
                _super.prototype.beforeLoadEntity.call(this, entity);
                // setting cascade value here
                // make sure you have [LookupInclude] on CategoryID property of ProductRow
                // otherwise this field won't be available in lookup script (will always be null),
                // so can't be filtered and you'll end up with an empty product list.
                this.form.ProductID.cascadeValue = this.categoryID;
            };
            FilteredLookupOrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FilteredLookupOrderDetailDialog);
            return FilteredLookupOrderDetailDialog;
        }(MiMovieTutorial.Northwind.OrderDetailDialog));
        BasicSamples.FilteredLookupOrderDetailDialog = FilteredLookupOrderDetailDialog;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                var addButton = Q.tryFirst(buttons, function (x) { return x.cssClass == 'add-button'; });
                if (addButton != null) {
                    addButton.onClick = function () {
                        _this.createEntityDialog(_this.getItemType(), function (dlg) {
                            var dialog = dlg;
                            dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                            _this.transferDialogReadOnly(dialog);
                            dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                        });
                    };
                }
                return buttons.filter(function (x) { return x.cssClass != "refresh-button"; });
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    _this.transferDialogReadOnly(dialog);
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase.prototype.enableDeleteColumn = function () {
                return false;
            };
            GridEditorBase.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (this.enableDeleteColumn()) {
                    columns.unshift({
                        field: 'Delete Row',
                        name: '',
                        format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                            '<i class="fa fa-trash-o text-red"></i></a>'; },
                        width: 24,
                        minWidth: 24,
                        maxWidth: 24
                    });
                }
                return columns;
            };
            GridEditorBase.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (this.enableDeleteColumn()) {
                        if (target.hasClass('delete-row')) {
                            Q.confirm(Q.text('Controls.EntityDialog.DeleteConfirmation'), function () {
                                _this.deleteEntity(item[_this.getIdProperty()]);
                            });
                        }
                    }
                }
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = MiMovieTutorial.Common || (MiMovieTutorial.Common = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailsEditor = /** @class */ (function (_super) {
            __extends(OrderDetailsEditor, _super);
            function OrderDetailsEditor(container) {
                return _super.call(this, container) || this;
            }
            OrderDetailsEditor.prototype.getColumnsKey = function () { return "Northwind.OrderDetail"; };
            OrderDetailsEditor.prototype.getDialogType = function () { return Northwind.OrderDetailDialog; };
            OrderDetailsEditor.prototype.getLocalTextPrefix = function () { return Northwind.OrderDetailRow.localTextPrefix; };
            OrderDetailsEditor.prototype.validateEntity = function (row, id) {
                row.ProductID = Q.toId(row.ProductID);
                var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return x.ProductID === row.ProductID; });
                if (sameProduct && this.id(sameProduct) !== id) {
                    Q.alert('This product is already in order details!');
                    return false;
                }
                row.ProductName = Northwind.ProductRow.getLookup().itemById[row.ProductID].ProductName;
                row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                return true;
            };
            OrderDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailsEditor);
            return OrderDetailsEditor;
        }(MiMovieTutorial.Common.GridEditorBase));
        Northwind.OrderDetailsEditor = OrderDetailsEditor;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/OrderDetail/OrderDetailsEditor.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our subclass of Order Details editor with a CategoryID property
         */
        var FilteredLookupDetailEditor = /** @class */ (function (_super) {
            __extends(FilteredLookupDetailEditor, _super);
            function FilteredLookupDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            FilteredLookupDetailEditor.prototype.getDialogType = function () { return BasicSamples.FilteredLookupOrderDetailDialog; };
            /**
             * This method is called to initialize an edit dialog created by
             * grid editor when Add button or an edit link is clicked
             * We have an opportunity here to pass CategoryID to edit dialog
             */
            FilteredLookupDetailEditor.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                // passing category ID from grid editor to detail dialog
                dialog.categoryID = this.categoryID;
            };
            FilteredLookupDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], FilteredLookupDetailEditor);
            return FilteredLookupDetailEditor;
        }(MiMovieTutorial.Northwind.OrderDetailsEditor));
        BasicSamples.FilteredLookupDetailEditor = FilteredLookupDetailEditor;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Basic order dialog with a category selection
         */
        var FilteredLookupInDetailDialog = /** @class */ (function (_super) {
            __extends(FilteredLookupInDetailDialog, _super);
            function FilteredLookupInDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.FilteredLookupInDetailForm(_this.idPrefix);
                _this.form.CategoryID.change(function (e) {
                    _this.form.DetailList.categoryID = Q.toId(_this.form.CategoryID.value);
                });
                return _this;
            }
            FilteredLookupInDetailDialog.prototype.getFormKey = function () { return BasicSamples.FilteredLookupInDetailForm.formKey; };
            FilteredLookupInDetailDialog.prototype.getIdProperty = function () { return MiMovieTutorial.Northwind.OrderRow.idProperty; };
            FilteredLookupInDetailDialog.prototype.getLocalTextPrefix = function () { return MiMovieTutorial.Northwind.OrderRow.localTextPrefix; };
            FilteredLookupInDetailDialog.prototype.getNameProperty = function () { return MiMovieTutorial.Northwind.OrderRow.nameProperty; };
            FilteredLookupInDetailDialog.prototype.getService = function () { return MiMovieTutorial.Northwind.OrderService.baseUrl; };
            FilteredLookupInDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FilteredLookupInDetailDialog);
            return FilteredLookupInDetailDialog;
        }(Serenity.EntityDialog));
        BasicSamples.FilteredLookupInDetailDialog = FilteredLookupInDetailDialog;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to FilteredLookupInDetailDialog
         */
        var FilteredLookupInDetailGrid = /** @class */ (function (_super) {
            __extends(FilteredLookupInDetailGrid, _super);
            function FilteredLookupInDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            FilteredLookupInDetailGrid.prototype.getDialogType = function () { return BasicSamples.FilteredLookupInDetailDialog; };
            FilteredLookupInDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FilteredLookupInDetailGrid);
            return FilteredLookupInDetailGrid;
        }(MiMovieTutorial.Northwind.OrderGrid));
        BasicSamples.FilteredLookupInDetailGrid = FilteredLookupInDetailGrid;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Product/ProductDialog.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * This is our custom product dialog that uses a different product form
         * (LookupFilterByMultipleForm) with our special category editor.
         */
        var LookupFilterByMultipleDialog = /** @class */ (function (_super) {
            __extends(LookupFilterByMultipleDialog, _super);
            function LookupFilterByMultipleDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LookupFilterByMultipleDialog.prototype.getFormKey = function () { return BasicSamples.LookupFilterByMultipleForm.formKey; };
            LookupFilterByMultipleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LookupFilterByMultipleDialog);
            return LookupFilterByMultipleDialog;
        }(MiMovieTutorial.Northwind.ProductDialog));
        BasicSamples.LookupFilterByMultipleDialog = LookupFilterByMultipleDialog;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
         */
        var LookupFilterByMultipleGrid = /** @class */ (function (_super) {
            __extends(LookupFilterByMultipleGrid, _super);
            function LookupFilterByMultipleGrid(container) {
                return _super.call(this, container) || this;
            }
            LookupFilterByMultipleGrid.prototype.getDialogType = function () { return BasicSamples.LookupFilterByMultipleDialog; };
            /**
             * This method is called just before List request is sent to service.
             * You have an opportunity here to cancel request or modify it.
             * Here we'll add a custom criteria to list request.
             */
            LookupFilterByMultipleGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // this has no relation to our lookup editor but as we'll allow picking only 
                // categories of Produce and Seafood in product dialog, it's better to show
                // only products from these categories in grid too
                var request = this.view.params;
                request.Criteria = Serenity.Criteria.and(request.Criteria, [['CategoryName'], 'in', [['Produce', 'Seafood']]]);
                // brackets used are important above, NOT ['CategoryName', 'in', ['Produce', 'Seafood']]
                return true;
            };
            LookupFilterByMultipleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LookupFilterByMultipleGrid);
            return LookupFilterByMultipleGrid;
        }(MiMovieTutorial.Northwind.ProductGrid));
        BasicSamples.LookupFilterByMultipleGrid = LookupFilterByMultipleGrid;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * This is our category editor that will show only categories of Produce and
         * Seafood. We are subclassing LookupEditorBase which also LookupEditor
         * derives from.
         *
         * After compiling and transforming templates, this editor type will be
         * available in server side to use in our LookupFilterByMultipleForm,
         * which is a version of ProductForm that uses our custom editor.
         */
        var ProduceSeafoodCategoryEditor = /** @class */ (function (_super) {
            __extends(ProduceSeafoodCategoryEditor, _super);
            function ProduceSeafoodCategoryEditor(container, opt) {
                return _super.call(this, container, opt) || this;
            }
            /**
             * Normally LookupEditor requires a lookup key to determine which set of
             * lookup data to show in editor. As our editor will only show category
             * data, we lock it to category lookup key.
             */
            ProduceSeafoodCategoryEditor.prototype.getLookupKey = function () {
                return MiMovieTutorial.Northwind.CategoryRow.lookupKey;
            };
            /**
             * Here we are filtering by category name but you could filter by any field.
             * Just make sure the fields you filter on has [LookupInclude] attribute on them,
             * otherwise their value will be null in client side as they are not sent back
             * from server in lookup script.
             */
            ProduceSeafoodCategoryEditor.prototype.getItems = function (lookup) {
                return _super.prototype.getItems.call(this, lookup).filter(function (x) {
                    return x.CategoryName === 'Produce' || x.CategoryName === 'Seafood';
                });
            };
            ProduceSeafoodCategoryEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ProduceSeafoodCategoryEditor);
            return ProduceSeafoodCategoryEditor;
        }(Serenity.LookupEditorBase));
        BasicSamples.ProduceSeafoodCategoryEditor = ProduceSeafoodCategoryEditor;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var HardcodedValuesDialog = /** @class */ (function (_super) {
            __extends(HardcodedValuesDialog, _super);
            function HardcodedValuesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.HardcodedValuesForm(_this.idPrefix);
                _this.dialogTitle = "Please select some value";
                _this.form.SomeValue.changeSelect2(function (e) {
                    Q.notifySuccess("You selected item with key: " + _this.form.SomeValue.value);
                });
                return _this;
            }
            HardcodedValuesDialog.prototype.getFormKey = function () { return BasicSamples.HardcodedValuesForm.formKey; };
            HardcodedValuesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], HardcodedValuesDialog);
            return HardcodedValuesDialog;
        }(Serenity.PropertyDialog));
        BasicSamples.HardcodedValuesDialog = HardcodedValuesDialog;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our select editor with hardcoded values.
         *
         * When you define a new editor type, make sure you build
         * and transform templates for it to be available
         * in server side forms, e.g. [HardCodedValuesEditor]
         */
        var HardcodedValuesEditor = /** @class */ (function (_super) {
            __extends(HardcodedValuesEditor, _super);
            function HardcodedValuesEditor(container) {
                var _this = _super.call(this, container, null) || this;
                // add option accepts a key (id) value and display text value
                _this.addOption("key1", "Text 1");
                _this.addOption("key2", "Text 2");
                // you may also use addItem which accepts a Select2Item parameter
                _this.addItem({
                    id: "key3",
                    text: "Text 3"
                });
                // don't let selecting this one (disabled)
                _this.addItem({
                    id: "key4",
                    text: "Text 4",
                    disabled: true
                });
                return _this;
            }
            HardcodedValuesEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], HardcodedValuesEditor);
            return HardcodedValuesEditor;
        }(Serenity.Select2Editor));
        BasicSamples.HardcodedValuesEditor = HardcodedValuesEditor;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var StaticTextBlockDialog = /** @class */ (function (_super) {
            __extends(StaticTextBlockDialog, _super);
            function StaticTextBlockDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.StaticTextBlockForm(_this.idPrefix);
                _this.dialogTitle = "A form with static text blocks";
                return _this;
            }
            StaticTextBlockDialog.prototype.getFormKey = function () { return BasicSamples.StaticTextBlockForm.formKey; };
            /**
             * Here we override loadInitialEntity method to set value for "DisplayFieldValue" field.
             * If this was an EntityDialog, your field value would be originating from server side entity.
             */
            StaticTextBlockDialog.prototype.loadInitialEntity = function () {
                this.propertyGrid.load({
                    DisplayFieldValue: 'This content comes from <b>the value</b> of <em>DisplayFieldValue</em> field.'
                });
            };
            StaticTextBlockDialog.prototype.getDialogOptions = function () {
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.width = 650;
                return opt;
            };
            StaticTextBlockDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StaticTextBlockDialog);
            return StaticTextBlockDialog;
        }(Serenity.PropertyDialog));
        BasicSamples.StaticTextBlockDialog = StaticTextBlockDialog;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new MiMovieTutorial.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = MiMovieTutorial.Common || (MiMovieTutorial.Common = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Common/Helpers/BulkServiceAction.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var OrderBulkAction = /** @class */ (function (_super) {
            __extends(OrderBulkAction, _super);
            function OrderBulkAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * This controls how many service requests will be used in parallel.
             * Determine this number based on how many requests your server
             * might be able to handle, and amount of wait on external resources.
             */
            OrderBulkAction.prototype.getParallelRequests = function () {
                return 10;
            };
            /**
             * These number of records IDs will be sent to your service in one
             * service call. If your service is designed to handle one record only,
             * set it to 1. But note that, if you have 5000 records, this will
             * result in 5000 service calls / requests.
             */
            OrderBulkAction.prototype.getBatchSize = function () {
                return 5;
            };
            /**
             * This is where you should call your service.
             * Batch parameter contains the selected order IDs
             * that should be processed in this service call.
             */
            OrderBulkAction.prototype.executeForBatch = function (batch) {
                var _this = this;
                BasicSamples.BasicSamplesService.OrderBulkAction({
                    OrderIDs: batch.map(function (x) { return Q.parseInteger(x); })
                }, function (response) { return _this.set_successCount(_this.get_successCount() + batch.length); }, {
                    blockUI: false,
                    onError: function (response) { return _this.set_errorCount(_this.get_errorCount() + batch.length); },
                    onCleanup: function () { return _this.serviceCallCleanup(); }
                });
            };
            return OrderBulkAction;
        }(MiMovieTutorial.Common.BulkServiceAction));
        BasicSamples.OrderBulkAction = OrderBulkAction;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
/// <reference path="OrderBulkAction.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var CancellableBulkActionGrid = /** @class */ (function (_super) {
            __extends(CancellableBulkActionGrid, _super);
            function CancellableBulkActionGrid(container) {
                return _super.call(this, container) || this;
            }
            CancellableBulkActionGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            CancellableBulkActionGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: 'Perform Bulk Action on Selected Orders',
                        cssClass: 'send-button',
                        onClick: function () {
                            if (!_this.onViewSubmit()) {
                                return;
                            }
                            var action = new BasicSamples.OrderBulkAction();
                            action.done = function () { return _this.rowSelection.resetCheckedAndRefresh(); };
                            action.execute(_this.rowSelection.getSelectedKeys());
                        }
                    }];
            };
            CancellableBulkActionGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            CancellableBulkActionGrid.prototype.getViewOptions = function () {
                var opt = _super.prototype.getViewOptions.call(this);
                opt.rowsPerPage = 2500;
                return opt;
            };
            CancellableBulkActionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CancellableBulkActionGrid);
            return CancellableBulkActionGrid;
        }(MiMovieTutorial.Northwind.OrderGrid));
        BasicSamples.CancellableBulkActionGrid = CancellableBulkActionGrid;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var ConditionalFormattingGrid = /** @class */ (function (_super) {
            __extends(ConditionalFormattingGrid, _super);
            function ConditionalFormattingGrid(container) {
                return _super.call(this, container) || this;
            }
            ConditionalFormattingGrid.prototype.getColumnsKey = function () { return "Northwind.Product"; };
            ConditionalFormattingGrid.prototype.getDialogType = function () { return MiMovieTutorial.Northwind.ProductDialog; };
            ConditionalFormattingGrid.prototype.getIdProperty = function () { return MiMovieTutorial.Northwind.ProductRow.idProperty; };
            ConditionalFormattingGrid.prototype.getLocalTextPrefix = function () { return MiMovieTutorial.Northwind.ProductRow.localTextPrefix; };
            ConditionalFormattingGrid.prototype.getService = function () { return MiMovieTutorial.Northwind.ProductService.baseUrl; };
            /**
             * We override getColumns() to be able to add a custom CSS class to UnitPrice
             * We could also add this class in ProductColumns.cs but didn't want to modify
             * it solely for this sample.
             */
            ConditionalFormattingGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                // adding a specific css class to UnitPrice column, 
                // to be able to format cell with a different background
                Q.first(columns, function (x) { return x.field == "UnitPrice" /* UnitPrice */; }).cssClass += " col-unit-price";
                return columns;
            };
            /**
             * This method is called for all rows
             * @param item Data item for current row
             * @param index Index of the row in grid
             */
            ConditionalFormattingGrid.prototype.getItemCssClass = function (item, index) {
                var klass = "";
                if (item.Discontinued == true)
                    klass += " discontinued";
                else if (item.UnitsInStock <= 0)
                    klass += " out-of-stock";
                else if (item.UnitsInStock < 20)
                    klass += " critical-stock";
                else if (item.UnitsInStock > 50)
                    klass += " needs-reorder";
                if (item.UnitPrice >= 50)
                    klass += " high-price";
                else if (item.UnitPrice >= 20)
                    klass += " medium-price";
                else
                    klass += " low-price";
                return Q.trimToNull(klass);
            };
            ConditionalFormattingGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ConditionalFormattingGrid);
            return ConditionalFormattingGrid;
        }(Serenity.EntityGrid));
        BasicSamples.ConditionalFormattingGrid = ConditionalFormattingGrid;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var CustomLinksInGrid = /** @class */ (function (_super) {
            __extends(CustomLinksInGrid, _super);
            function CustomLinksInGrid(container) {
                return _super.call(this, container) || this;
            }
            /**
             * We override getColumns() to change format functions for some columns.
             * You could also write them as formatter classes, and use them at server side
             */
            CustomLinksInGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field == "CustomerCompanyName" /* CustomerCompanyName */; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"customer-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                Q.first(columns, function (x) { return x.field == "OrderDate" /* OrderDate */; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"date-link\">" + Q.formatDate(ctx.value) + "</a>"; };
                Q.first(columns, function (x) { return x.field == "EmployeeFullName" /* EmployeeFullName */; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"employee-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                Q.first(columns, function (x) { return x.field == "ShipCountry" /* ShipCountry */; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"ship-country-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                return columns;
            };
            CustomLinksInGrid.prototype.onClick = function (e, row, cell) {
                // let base grid handle clicks for its edit links
                _super.prototype.onClick.call(this, e, row, cell);
                // if base grid already handled, we shouldn"t handle it again
                if (e.isDefaultPrevented()) {
                    return;
                }
                // get reference to current item
                var item = this.itemAt(row);
                // get reference to clicked element
                var target = $(e.target);
                if (target.hasClass("customer-link")) {
                    e.preventDefault();
                    var message = Q.format("<p>You have clicked an order from customer: {0}.</p>" +
                        "<p>If you click Yes, i'll open Customer dialog.</p>" +
                        "<p>If you click No, i'll open Order dialog.</p>", Q.htmlEncode(item.CustomerCompanyName));
                    Q.confirm(message, function () {
                        // CustomerDialog doesn't use CustomerID but ID (identity)
                        // so need to find customer to get its actual ID
                        var customer = Q.first(MiMovieTutorial.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == item.CustomerID; });
                        new MiMovieTutorial.Northwind.CustomerDialog().loadByIdAndOpenDialog(customer.ID);
                    }, {
                        htmlEncode: false,
                        onNo: function () {
                            new MiMovieTutorial.Northwind.OrderDialog().loadByIdAndOpenDialog(item.OrderID);
                        }
                    });
                }
                else if (target.hasClass("date-link")) {
                    e.preventDefault();
                    var ordersInSameDate = Q.count(this.view.getItems(), function (x) { return x.OrderDate == item.OrderDate; });
                    Q.notifyInfo("You clicked an order from date " +
                        Q.formatDate(item.OrderDate) + ". There are " +
                        ordersInSameDate + " orders from the same date that is loaded in grid at the moment");
                }
                else if (target.hasClass("employee-link")) {
                    e.preventDefault();
                    Q.notifySuccess("You clicked an employee name, " +
                        "so i've opened a new Order Dialog from same customer " +
                        "with that employee prepopulated!");
                    new MiMovieTutorial.Northwind.OrderDialog().loadEntityAndOpenDialog({
                        CustomerID: item.CustomerID,
                        EmployeeID: item.EmployeeID
                    });
                }
                else if (target.hasClass("ship-country-link")) {
                    e.preventDefault();
                    Q.notifySuccess("Let's filter the grid to orders from " + item.ShipCountry);
                    var countryFilter = this.findQuickFilter(Serenity.LookupEditor, "ShipCountry" /* ShipCountry */);
                    countryFilter.value = item.ShipCountry;
                    this.refresh();
                }
            };
            /**
             * This method is called for columns with [EditLink] attribute,
             * but only for edit links of this grid's own item type.
             * It is also called by Add Product button with a NULL entityOrId
             * parameter so we should check that entityOrId is a string
             * to be sure it is originating from a link.
             *
             * As we changed format for other columns, this will only be called
             * for links in remaining OrderID column
             */
            CustomLinksInGrid.prototype.editItem = function (entityOrId) {
                // check that this is an edit link click, not add button, ID is always a string
                if (typeof entityOrId == "string") {
                    // convert ID to an integer, and find order with that ID
                    var item = this.view.getItemById(Q.toId(entityOrId));
                    // date is a ISO string, so need to parse it first
                    var date = Q.formatDate(item.OrderDate);
                    // ask for confirmation
                    Q.confirm(Q.format("You clicked edit link for order with ID: {0} and Date: {1}. Should i open that order?", item.OrderID, date), function () {
                        new MiMovieTutorial.Northwind.OrderDialog().loadByIdAndOpenDialog(item.OrderID);
                    });
                }
                else {
                    _super.prototype.editItem.call(this, entityOrId);
                }
            };
            CustomLinksInGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomLinksInGrid);
            return CustomLinksInGrid;
        }(MiMovieTutorial.Northwind.OrderGrid));
        BasicSamples.CustomLinksInGrid = CustomLinksInGrid;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleDialog = /** @class */ (function (_super) {
            __extends(DragDropSampleDialog, _super);
            function DragDropSampleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BasicSamples.DragDropSampleForm(_this.idPrefix);
                return _this;
            }
            DragDropSampleDialog.prototype.getFormKey = function () { return BasicSamples.DragDropSampleForm.formKey; };
            DragDropSampleDialog.prototype.getIdProperty = function () { return BasicSamples.DragDropSampleRow.idProperty; };
            DragDropSampleDialog.prototype.getLocalTextPrefix = function () { return BasicSamples.DragDropSampleRow.localTextPrefix; };
            DragDropSampleDialog.prototype.getNameProperty = function () { return BasicSamples.DragDropSampleRow.nameProperty; };
            DragDropSampleDialog.prototype.getService = function () { return BasicSamples.DragDropSampleService.baseUrl; };
            DragDropSampleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DragDropSampleDialog);
            return DragDropSampleDialog;
        }(Serenity.EntityDialog));
        BasicSamples.DragDropSampleDialog = DragDropSampleDialog;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleGrid = /** @class */ (function (_super) {
            __extends(DragDropSampleGrid, _super);
            function DragDropSampleGrid(container) {
                var _this = _super.call(this, container) || this;
                new Serenity.TreeGridMixin({
                    grid: _this,
                    toggleField: "Title" /* Title */,
                    getParentId: function (x) { return x.ParentId; },
                    initialCollapse: function () { return false; },
                });
                // save prior drag target to restore its color during drag
                var priorDragTarget;
                // prevent the grid from cancelling drag'n'drop by default
                _this.slickGrid.onDragInit.subscribe(function (e, dd) {
                    e.stopImmediatePropagation();
                });
                // this method is called when an item is about to be dragged
                _this.slickGrid.onDragStart.subscribe(function (e, dd) {
                    // only allow edit links to be dragged
                    if (!$(e.target).hasClass('s-EditLink'))
                        return;
                    // make sure there is a cell in source location
                    var cell = _this.slickGrid.getCellFromEvent(e);
                    if (!cell) {
                        return;
                    }
                    // notify that we'll handle drag
                    e.stopImmediatePropagation();
                    // save details about dragged item
                    dd.row = cell.row;
                    var item = _this.itemAt(cell.row);
                    dd.item = item;
                    // a unique name for our operation
                    dd.mode = "move";
                    // create an absolute position helper shown during dragging
                    var helper = $("<span></span>")
                        .addClass('drag-helper')
                        .text("Moving " + item.Title)
                        .appendTo(document.body);
                    dd.helper = helper;
                });
                // this method is periodically called during drag
                _this.slickGrid.onDrag.subscribe(function (e, dd) {
                    // only handle our operation
                    if (dd.mode != "move") {
                        return;
                    }
                    // if we changed color of some target before, reset it
                    if (priorDragTarget && priorDragTarget != e.target) {
                        $(priorDragTarget).css('background-color', '');
                        priorDragTarget = null;
                    }
                    // find target, the source will drag into
                    var cell = _this.slickGrid.getCellFromEvent(e);
                    var target = !cell ? null : _this.itemAt(cell.row);
                    // accept only edit links and valid items as drag target
                    var reject = !$(e.target).hasClass('s-EditLink') || !_this.canMoveUnder(dd.item, target);
                    if (reject) {
                        dd.helper.text("Can't move " + dd.item.Title + " here");
                    }
                    else {
                        dd.helper.text("Move " + dd.item.Title + " under " + $(e.target).text());
                        // change color of current drag target
                        $(e.target).css('background-color', '#ddeeee');
                        priorDragTarget = e.target;
                    }
                    // toggle class of helper to show relevant accept / reject icon
                    dd.helper.toggleClass('reject', reject);
                    // position helper next to current mouse position
                    dd.helper.css({ top: e.pageY + 5, left: e.pageX + 4 });
                });
                // this is called when drag is completed
                _this.slickGrid.onDragEnd.subscribe(function (e, dd) {
                    if (dd.mode != "move") {
                        return;
                    }
                    // prevent browser from changing url
                    e.preventDefault();
                    // clear indicator color and drag helper
                    priorDragTarget && $(priorDragTarget).css('background-color', '');
                    dd.helper.remove();
                    // determine target row
                    var cell = _this.slickGrid.getCellFromEvent(e);
                    var item = dd.item;
                    var target = !cell ? null : _this.itemAt(cell.row);
                    // check again that this is valid drag target
                    if ($(e.target).hasClass('s-EditLink') && _this.canMoveUnder(item, target)) {
                        // this will move our primary drag source under new parent
                        var moveItem = function (onSuccess) {
                            BasicSamples.DragDropSampleService.Update({
                                EntityId: item.Id,
                                Entity: {
                                    ParentId: target.Id
                                }
                            }, onSuccess);
                        };
                        // if drag source has some children, need some confirmation
                        var children = _this.getChildren(dd.item);
                        if (children.length > 0) {
                            Q.confirm('Move its children alongside the item?', function () {
                                // if responded yes, moving item under new parent should be enough
                                moveItem(function () { return _this.refresh(); });
                            }, {
                                onNo: function () {
                                    // if responded no, children should move under old parent of item
                                    var oldParentId = item.ParentId == null ? null : item.ParentId;
                                    var moveNextChild = function (onSuccess) {
                                        var _this = this;
                                        if (children.length) {
                                            var x = children.shift();
                                            BasicSamples.DragDropSampleService.Update({
                                                EntityId: x.Id,
                                                Entity: {
                                                    ParentId: oldParentId || null
                                                }
                                            }, function () { return moveNextChild(onSuccess); }, {
                                                onError: function () { return _this.refresh(); }
                                            });
                                        }
                                        else
                                            onSuccess();
                                    };
                                    // first move item itself under new parent, 
                                    // then move its children under old parent one by one
                                    moveItem(function () { return moveNextChild(function () { return _this.refresh(); }); });
                                }
                            });
                        }
                        else {
                            // item has no children, just move it under new parent
                            moveItem(function () { return _this.refresh(); });
                        }
                    }
                    return false;
                });
                return _this;
            }
            DragDropSampleGrid.prototype.getColumnsKey = function () { return 'BasicSamples.DragDropSample'; };
            DragDropSampleGrid.prototype.getDialogType = function () { return BasicSamples.DragDropSampleDialog; };
            DragDropSampleGrid.prototype.getIdProperty = function () { return BasicSamples.DragDropSampleRow.idProperty; };
            DragDropSampleGrid.prototype.getLocalTextPrefix = function () { return BasicSamples.DragDropSampleRow.localTextPrefix; };
            DragDropSampleGrid.prototype.getService = function () { return BasicSamples.DragDropSampleService.baseUrl; };
            /**
             * This method will determine if item can be moved under a given target
             * An item can't be moved under itself, under one of its children
             */
            DragDropSampleGrid.prototype.canMoveUnder = function (item, target) {
                if (!item || !target || item.Id == target.Id || item.ParentId == target.Id)
                    return false;
                if (Q.any(this.getParents(target), function (x) { return x.Id == item.Id; }))
                    return false;
                return true;
            };
            /**
             * Gets children list of an item
             */
            DragDropSampleGrid.prototype.getChildren = function (item) {
                return this.getItems().filter(function (x) { return x.ParentId == item.Id; });
            };
            /**
             * Gets all parents of an item
             */
            DragDropSampleGrid.prototype.getParents = function (item) {
                // use this to prevent infinite recursion
                var visited = {};
                var result = [];
                // while item has a parent and not visited yet
                while (item.ParentId && !visited[item.ParentId]) {
                    // find parent by its ID
                    item = this.view.getItemById(item.ParentId);
                    if (!item)
                        break;
                    result.push(item);
                    visited[item.Id] = true;
                }
                return result;
            };
            DragDropSampleGrid.prototype.getButtons = function () {
                return [];
            };
            DragDropSampleGrid.prototype.usePager = function () {
                return false;
            };
            DragDropSampleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DragDropSampleGrid);
            return DragDropSampleGrid;
        }(Serenity.EntityGrid));
        BasicSamples.DragDropSampleGrid = DragDropSampleGrid;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var SelectableEntityGrid = /** @class */ (function (_super) {
        __extends(SelectableEntityGrid, _super);
        function SelectableEntityGrid() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SelectableEntityGrid.prototype.getSlickOptions = function () {
            var opt = _super.prototype.getSlickOptions.call(this);
            opt.enableTextSelectionOnCells = true;
            opt.selectedCellCssClass = "slick-row-selected";
            opt.enableCellNavigation = true;
            return opt;
        };
        SelectableEntityGrid.prototype.createSlickGrid = function () {
            var grid = _super.prototype.createSlickGrid.call(this);
            grid.setSelectionModel(new Slick.RowSelectionModel());
            return grid;
        };
        SelectableEntityGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SelectableEntityGrid);
        return SelectableEntityGrid;
    }(Serenity.EntityGrid));
    MiMovieTutorial.SelectableEntityGrid = SelectableEntityGrid;
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="SelectableEntityGrid.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var RowSelectionGrid = /** @class */ (function (_super) {
            __extends(RowSelectionGrid, _super);
            function RowSelectionGrid(container) {
                return _super.call(this, container) || this;
            }
            RowSelectionGrid.prototype.getColumnsKey = function () { return "Northwind.Supplier"; };
            RowSelectionGrid.prototype.getDialogType = function () { return MiMovieTutorial.Northwind.SupplierDialog; };
            RowSelectionGrid.prototype.getIdProperty = function () { return MiMovieTutorial.Northwind.SupplierRow.idProperty; };
            RowSelectionGrid.prototype.getLocalTextPrefix = function () { return MiMovieTutorial.Northwind.SupplierRow.localTextPrefix; };
            RowSelectionGrid.prototype.getService = function () { return MiMovieTutorial.Northwind.SupplierService.baseUrl; };
            RowSelectionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RowSelectionGrid);
            return RowSelectionGrid;
        }(MiMovieTutorial.SelectableEntityGrid));
        BasicSamples.RowSelectionGrid = RowSelectionGrid;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var GridFilteredByCriteria = /** @class */ (function (_super) {
            __extends(GridFilteredByCriteria, _super);
            function GridFilteredByCriteria(container) {
                return _super.call(this, container) || this;
            }
            GridFilteredByCriteria.prototype.onViewSubmit = function () {
                // only continue if base class returns true (didn't cancel request)
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // view object is the data source for grid (SlickRemoteView)
                // this is an EntityGrid so its Params object is a ListRequest
                var request = this.view.params;
                // list request has a Criteria parameter
                // we AND criteria here to existing one because 
                // otherwise we might clear filter set by 
                // an edit filter dialog if any.
                request.Criteria = Serenity.Criteria.and(request.Criteria, [['UnitsInStock'], '>', 10], [['CategoryName'], '!=', 'Condiments'], [['Discontinued'], '=', 0]);
                // TypeScript doesn't support operator overloading
                // so we had to use array syntax above to build criteria.
                // Make sure you write
                // [['Field'], '>', 10] (which means field A is greater than 10)
                // not 
                // ['A', '>', 10] (which means string 'A' is greater than 10
                return true;
            };
            GridFilteredByCriteria = __decorate([
                Serenity.Decorators.registerClass()
            ], GridFilteredByCriteria);
            return GridFilteredByCriteria;
        }(MiMovieTutorial.Northwind.ProductGrid));
        BasicSamples.GridFilteredByCriteria = GridFilteredByCriteria;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var GroupingAndSummariesInGrid = /** @class */ (function (_super) {
            __extends(GroupingAndSummariesInGrid, _super);
            function GroupingAndSummariesInGrid(container) {
                return _super.call(this, container) || this;
            }
            GroupingAndSummariesInGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Avg('UnitPrice'),
                        new Slick.Aggregators.Sum('UnitsInStock'),
                        new Slick.Aggregators.Max('UnitsOnOrder'),
                        new Slick.Aggregators.Avg('ReorderLevel')
                    ]
                });
                return grid;
            };
            GroupingAndSummariesInGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field === 'UnitsOnOrder'; })
                    .groupTotalsFormatter = function (totals, col) {
                    return (totals.max ? ('max: ' + Q.coalesce(totals.max[col.field], '')) : '');
                };
                Q.first(columns, function (x) { return x.field === 'ReorderLevel'; })
                    .groupTotalsFormatter = function (totals, col) {
                    return (totals.avg ? ('avg: ' + Q.coalesce(Q.formatNumber(totals.avg[col.field], '0.'), '')) : '');
                };
                return columns;
            };
            GroupingAndSummariesInGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            GroupingAndSummariesInGrid.prototype.usePager = function () {
                return false;
            };
            GroupingAndSummariesInGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: 'Group By Category',
                        cssClass: 'expand-all-button',
                        onClick: function () { return _this.view.setGrouping([{
                                getter: 'CategoryName'
                            }]); }
                    },
                    {
                        title: 'Group By Category and Supplier',
                        cssClass: 'expand-all-button',
                        onClick: function () { return _this.view.setGrouping([{
                                formatter: function (x) { return 'Category: ' + x.value + ' (' + x.count + ' items)'; },
                                getter: 'CategoryName'
                            }, {
                                formatter: function (x) { return 'Supplier: ' + x.value + ' (' + x.count + ' items)'; },
                                getter: 'SupplierCompanyName'
                            }]); }
                    }, {
                        title: 'No Grouping',
                        cssClass: 'collapse-all-button',
                        onClick: function () { return _this.view.setGrouping([]); }
                    }];
            };
            GroupingAndSummariesInGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GroupingAndSummariesInGrid);
            return GroupingAndSummariesInGrid;
        }(MiMovieTutorial.Northwind.ProductGrid));
        BasicSamples.GroupingAndSummariesInGrid = GroupingAndSummariesInGrid;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var InitialValuesForQuickFilters = /** @class */ (function (_super) {
            __extends(InitialValuesForQuickFilters, _super);
            function InitialValuesForQuickFilters(container) {
                return _super.call(this, container) || this;
            }
            /**
             * This method is called to get list of quick filters to be created for this grid.
             * By default, it returns quick filter objects corresponding to properties that
             * have a [QuickFilter] attribute at server side OrderColumns.cs
             */
            InitialValuesForQuickFilters.prototype.getQuickFilters = function () {
                // get quick filter list from base class
                var filters = _super.prototype.getQuickFilters.call(this);
                // quick filter init method is a good place to set initial
                // value for a quick filter editor, just after it is created
                Q.first(filters, function (x) { return x.field == "OrderDate" /* OrderDate */; }).init = function (w) {
                    // w is a reference to the editor for this quick filter widget
                    // here we cast it to DateEditor, and set its value as date.
                    // note that in Javascript, months are 0 based, so date below
                    // is actually 2016-05-01
                    w.valueAsDate = new Date(2016, 4, 1);
                    // setting start date was simple. but this quick filter is actually
                    // a combination of two date editors. to get reference to second one,
                    // need to find its next sibling element by its class
                    var endDate = w.element.nextAll(".s-DateEditor").getWidget(Serenity.DateEditor);
                    endDate.valueAsDate = new Date(2016, 6, 1);
                };
                Q.first(filters, function (x) { return x.field == "ShippingState" /* ShippingState */; }).init = function (w) {
                    // enum editor has a string value, so need to call toString()
                    w.value = MiMovieTutorial.Northwind.OrderShippingState.NotShipped.toString();
                };
                return filters;
            };
            /**
             * This method is another possible place to modify quick filter widgets.
             * It is where the quick filter widgets are actually created.
             *
             * By default, it calls getQuickFilters() then renders UI for these
             * quick filters.
             *
             * We could use getQuickFilters() method for ShipVia too,
             * but this is for demonstration purposes
             */
            InitialValuesForQuickFilters.prototype.createQuickFilters = function () {
                // let base class to create quick filters first
                _super.prototype.createQuickFilters.call(this);
                // find a quick filter widget by its field name
                this.findQuickFilter(Serenity.LookupEditor, "ShipVia" /* ShipVia */).values = ["1", "2"];
            };
            InitialValuesForQuickFilters = __decorate([
                Serenity.Decorators.registerClass()
            ], InitialValuesForQuickFilters);
            return InitialValuesForQuickFilters;
        }(MiMovieTutorial.Northwind.OrderGrid));
        BasicSamples.InitialValuesForQuickFilters = InitialValuesForQuickFilters;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Customer/CustomerGrid.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var InlineActionGrid = /** @class */ (function (_super) {
            __extends(InlineActionGrid, _super);
            function InlineActionGrid(container) {
                return _super.call(this, container) || this;
            }
            InlineActionGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(1, 0, {
                    field: 'View Details',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action view-details" title="view details"></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(2, 0, {
                    field: 'New Order',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action new-order" title="new order"></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            InlineActionGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            MiMovieTutorial.Northwind.CustomerService.Delete({
                                EntityId: item.ID,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                    else if (target.hasClass('view-details')) {
                        this.editItem(item.ID);
                    }
                    else if (target.hasClass('new-order')) {
                        var dlg = new MiMovieTutorial.Northwind.OrderDialog();
                        this.initDialog(dlg);
                        dlg.loadEntityAndOpenDialog({
                            CustomerID: item.CustomerID
                        });
                    }
                }
            };
            InlineActionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InlineActionGrid);
            return InlineActionGrid;
        }(MiMovieTutorial.Northwind.CustomerGrid));
        BasicSamples.InlineActionGrid = InlineActionGrid;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var InlineImageFormatter = /** @class */ (function () {
            function InlineImageFormatter() {
            }
            InlineImageFormatter.prototype.format = function (ctx) {
                var file = (this.fileProperty ? ctx.item[this.fileProperty] : ctx.value);
                if (!file || !file.length)
                    return "";
                var href = Q.resolveUrl("~/upload/" + file);
                if (this.thumb) {
                    var parts = file.split('.');
                    file = parts.slice(0, parts.length - 1).join('.') + '_t.jpg';
                }
                var src = Q.resolveUrl('~/upload/' + file);
                return "<a class=\"inline-image\" target='_blank' href=\"" + href + "\">" +
                    ("<img src=\"" + src + "\" style='max-height: 145px; max-width: 100%;' /></a>");
            };
            InlineImageFormatter.prototype.initializeColumn = function (column) {
                if (this.fileProperty) {
                    column.referencedFields = column.referencedFields || [];
                    column.referencedFields.push(this.fileProperty);
                }
            };
            __decorate([
                Serenity.Decorators.option()
            ], InlineImageFormatter.prototype, "fileProperty", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], InlineImageFormatter.prototype, "thumb", void 0);
            InlineImageFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], InlineImageFormatter);
            return InlineImageFormatter;
        }());
        BasicSamples.InlineImageFormatter = InlineImageFormatter;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var InlineImageInGrid = /** @class */ (function (_super) {
            __extends(InlineImageInGrid, _super);
            function InlineImageInGrid(container) {
                return _super.call(this, container) || this;
            }
            InlineImageInGrid.prototype.getColumnsKey = function () { return "BasicSamples.InlineImageInGrid"; };
            InlineImageInGrid.prototype.getDialogType = function () { return MiMovieTutorial.Northwind.ProductDialog; };
            InlineImageInGrid.prototype.getIdProperty = function () { return MiMovieTutorial.Northwind.ProductRow.idProperty; };
            InlineImageInGrid.prototype.getLocalTextPrefix = function () { return MiMovieTutorial.Northwind.ProductRow.localTextPrefix; };
            InlineImageInGrid.prototype.getService = function () { return MiMovieTutorial.Northwind.ProductService.baseUrl; };
            InlineImageInGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 150;
                return opt;
            };
            InlineImageInGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InlineImageInGrid);
            return InlineImageInGrid;
        }(Serenity.EntityGrid));
        BasicSamples.InlineImageInGrid = InlineImageInGrid;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportDialog = /** @class */ (function (_super) {
            __extends(ProductExcelImportDialog, _super);
            function ProductExcelImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.ProductExcelImportForm(_this.idPrefix);
                return _this;
            }
            ProductExcelImportDialog.prototype.getDialogTitle = function () {
                return "Excel Import";
            };
            ProductExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Import',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            BasicSamples.ProductExcelImportService.ExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
                                _this.dialogClose();
                            });
                        },
                    },
                    {
                        text: 'Cancel',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            ProductExcelImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductExcelImportDialog);
            return ProductExcelImportDialog;
        }(Serenity.PropertyDialog));
        BasicSamples.ProductExcelImportDialog = ProductExcelImportDialog;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportGrid = /** @class */ (function (_super) {
            __extends(ProductExcelImportGrid, _super);
            function ProductExcelImportGrid(container) {
                return _super.call(this, container) || this;
            }
            /**
             * This method is called to get list of buttons to be created.
             */
            ProductExcelImportGrid.prototype.getButtons = function () {
                var _this = this;
                // call base method to get list of buttons
                var buttons = _super.prototype.getButtons.call(this);
                // add our import button
                buttons.push({
                    title: 'Import From Excel',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new BasicSamples.ProductExcelImportDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                return buttons;
            };
            ProductExcelImportGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductExcelImportGrid);
            return ProductExcelImportGrid;
        }(MiMovieTutorial.Northwind.ProductGrid));
        BasicSamples.ProductExcelImportGrid = ProductExcelImportGrid;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var QuickFilterCustomization = /** @class */ (function (_super) {
            __extends(QuickFilterCustomization, _super);
            function QuickFilterCustomization(container) {
                return _super.call(this, container) || this;
            }
            QuickFilterCustomization.prototype.getColumnsKey = function () { return "Northwind.Order"; };
            QuickFilterCustomization.prototype.getDialogType = function () { return MiMovieTutorial.Northwind.OrderDialog; };
            QuickFilterCustomization.prototype.getIdProperty = function () { return MiMovieTutorial.Northwind.OrderRow.idProperty; };
            QuickFilterCustomization.prototype.getLocalTextPrefix = function () { return MiMovieTutorial.Northwind.OrderRow.localTextPrefix; };
            QuickFilterCustomization.prototype.getService = function () { return MiMovieTutorial.Northwind.OrderService.baseUrl; };
            /**
             * This method is called to get list of quick filters to be created for this grid.
             * By default, it returns quick filter objects corresponding to properties that
             * have a [QuickFilter] attribute at server side OrderColumns.cs
             */
            QuickFilterCustomization.prototype.getQuickFilters = function () {
                // get quick filter list from base class, e.g. columns
                var filters = _super.prototype.getQuickFilters.call(this);
                // we start by turning CustomerID filter to a Not Equal one
                var filter = Q.first(filters, function (x) { return x.field == "CustomerID" /* CustomerID */; });
                filter.title = "Customer Not Equal To";
                filter.handler = function (h) {
                    // if filter is active, e.g. editor has some value
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["CustomerID" /* CustomerID */], '!=', h.value]);
                    }
                };
                // turn order date filter to exact match, not a range
                filter = Q.first(filters, function (x) { return x.field == "OrderDate" /* OrderDate */; });
                filter.title = "Order Date Is Exactly";
                // element method in DataGrid turns this into a range editor, clear it to prevent
                filter.element = function (e) { };
                // need to override handler too, otherwise default handler will try to handle a date range
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.EqualityFilter["OrderDate" /* OrderDate */] = h.value;
                    }
                    else {
                        h.request.EqualityFilter["OrderDate" /* OrderDate */] = null;
                    }
                };
                // reset these as they also expect range editors
                filter.loadState = null;
                filter.saveState = null;
                filter.displayText = null;
                // make employee filter a textbox, instead of lookup, and search by starts with
                filter = Q.first(filters, function (x) { return x.field == "EmployeeID" /* EmployeeID */; });
                filter.title = "Employee Name Starts With";
                filter.type = Serenity.StringEditor;
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["EmployeeFullName" /* EmployeeFullName */], 'like', h.value + '%']);
                    }
                };
                // turn shipping state into a boolean filter
                filter = Q.first(filters, function (x) { return x.field == "ShippingState" /* ShippingState */; });
                filter.title = "Show Only Shipped";
                filter.type = Serenity.BooleanEditor;
                filter.handler = function (h) {
                    h.active = !!h.value;
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, ['is not null', ["ShippedDate" /* ShippedDate */]]);
                    }
                };
                // ship via filters by NOT IN
                filter = Q.first(filters, function (x) { return x.field == "ShipVia" /* ShipVia */; });
                filter.title = "Ship Via Not IN";
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["ShipVia" /* ShipVia */], 'not in', [h.value]]);
                    }
                };
                // ship country filters by NOT contains
                filter = Q.first(filters, function (x) { return x.field == "ShipCountry" /* ShipCountry */; });
                filter.title = "Ship Country NOT Contains";
                filter.type = Serenity.StringEditor;
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["ShipCountry" /* ShipCountry */], 'not like', '%' + h.value + '%']);
                    }
                };
                // ship city filters by GREATER THAN (>)
                filter = Q.first(filters, function (x) { return x.field == "ShipCity" /* ShipCity */; });
                filter.title = "Ship City Greater Than";
                filter.type = Serenity.StringEditor;
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["ShipCity" /* ShipCity */], '>', h.value]);
                    }
                };
                // create a range editor for freight
                var endFreight = null;
                filters.push({
                    field: "Freight" /* Freight */,
                    type: Serenity.DecimalEditor,
                    title: 'Freight Between',
                    element: function (e1) {
                        e1.css("width", "80px");
                        endFreight = Serenity.Widget.create({
                            type: Serenity.DecimalEditor,
                            element: function (e2) { return e2.insertAfter(e1).css("width", "80px"); }
                        });
                        endFreight.element.change(function (x) { return e1.triggerHandler("change"); });
                        $("<span/>").addClass("range-separator").text("-").insertAfter(e1);
                    },
                    handler: function (h) {
                        var active1 = h.value != null && !isNaN(h.value);
                        var active2 = endFreight.value != null && !isNaN(endFreight.value);
                        h.active = active1 || active2;
                        if (active1)
                            h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["Freight" /* Freight */], '>=', h.value]);
                        if (active2)
                            h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["Freight" /* Freight */], '<=', endFreight.value]);
                    }
                });
                return filters;
            };
            QuickFilterCustomization = __decorate([
                Serenity.Decorators.registerClass()
            ], QuickFilterCustomization);
            return QuickFilterCustomization;
        }(Serenity.EntityGrid));
        BasicSamples.QuickFilterCustomization = QuickFilterCustomization;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Supplier/SupplierGrid.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var RemovingAddButton = /** @class */ (function (_super) {
            __extends(RemovingAddButton, _super);
            function RemovingAddButton(container) {
                return _super.call(this, container) || this;
            }
            /**
             * This method is called to get list of buttons to be created.
             */
            RemovingAddButton.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            RemovingAddButton = __decorate([
                Serenity.Decorators.registerClass()
            ], RemovingAddButton);
            return RemovingAddButton;
        }(MiMovieTutorial.Northwind.SupplierGrid));
        BasicSamples.RemovingAddButton = RemovingAddButton;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var CustomerGrossSalesGrid = /** @class */ (function (_super) {
            __extends(CustomerGrossSalesGrid, _super);
            function CustomerGrossSalesGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            CustomerGrossSalesGrid.prototype.getColumnsKey = function () { return "BasicSamples.CustomerGrossSales"; };
            CustomerGrossSalesGrid.prototype.getIdProperty = function () { return "__id"; };
            CustomerGrossSalesGrid.prototype.getNameProperty = function () { return MiMovieTutorial.Northwind.CustomerGrossSalesRow.nameProperty; };
            CustomerGrossSalesGrid.prototype.getLocalTextPrefix = function () { return MiMovieTutorial.Northwind.CustomerGrossSalesRow.localTextPrefix; };
            CustomerGrossSalesGrid.prototype.getService = function () { return BasicSamples.CustomerGrossSalesService.baseUrl; };
            /**
             * This method is called to preprocess data returned from the list service
             */
            CustomerGrossSalesGrid.prototype.onViewProcessData = function (response) {
                response = _super.prototype.onViewProcessData.call(this, response);
                // there is no __id property in CustomerGrossSalesRow but 
                // this is javascript and we can set any property of an object
                for (var _i = 0, _a = response.Entities; _i < _a.length; _i++) {
                    var x = _a[_i];
                    x.__id = this.nextId++;
                }
                return response;
            };
            CustomerGrossSalesGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = [];
                buttons.push(MiMovieTutorial.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: BasicSamples.CustomerGrossSalesService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(MiMovieTutorial.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CustomerGrossSalesGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum('GrossAmount')
                    ]
                });
                this.view.setGrouping([{
                        getter: 'ContactName'
                    }]);
                return grid;
            };
            CustomerGrossSalesGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            CustomerGrossSalesGrid.prototype.usePager = function () {
                return false;
            };
            CustomerGrossSalesGrid.prototype.getQuickFilters = function () {
                var filters = _super.prototype.getQuickFilters.call(this);
                // we create a date-range quick filter, which is a composite
                // filter with two date time editors
                var orderDate = this.dateRangeQuickFilter('OrderDate', 'Order Date');
                // need to override its handler, as default date-range filter will set Criteria parameter of list request.
                // we need to set StartDate and EndDate custom parameters of our CustomerGrossSalesListRequest
                orderDate.handler = function (args) {
                    // args.widget here is the start date editor. value of a date editor is a ISO date string
                    var start = args.widget.value;
                    // to find end date editor, need to search it by its css class among siblings
                    var end = args.widget.element.nextAll('.s-DateEditor')
                        .getWidget(Serenity.DateEditor).value;
                    args.request.StartDate = start;
                    args.request.EndDate = end;
                    // active option controls when a filter editor looks active, e.g. its label is blueish
                    args.active = !Q.isEmptyOrNull(start) || !Q.isEmptyOrNull(end);
                };
                filters.push(orderDate);
                return filters;
            };
            CustomerGrossSalesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerGrossSalesGrid);
            return CustomerGrossSalesGrid;
        }(Serenity.EntityGrid));
        BasicSamples.CustomerGrossSalesGrid = CustomerGrossSalesGrid;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var TreeGrid = /** @class */ (function (_super) {
            __extends(TreeGrid, _super);
            function TreeGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.treeMixin = new Serenity.TreeGridMixin({
                    grid: _this,
                    // bring tree items initially collapsed
                    initialCollapse: function () { return true; },
                    // which column to place tree toggle / expand/collapse button
                    toggleField: "CustomerCompanyName" /* CustomerCompanyName */,
                    getParentId: function (x) {
                        // as we don't have parentId column here, we are cheating by using modulus 10 and 50
                        // e.g. order with ID 1605 will have parent 1600, order with ID 1613 will have parent 1610
                        var parentId = Math.floor(x.OrderID / 10) * 10;
                        if (parentId == x.OrderID) {
                            parentId = Math.floor(x.OrderID / 50) * 50;
                            // orders with ID 16050 and 17000 should have NULL parent
                            if (parentId == x.OrderID)
                                return null;
                        }
                        // if you had a ParentID column, you'd just return x.ParentID
                        return parentId;
                    }
                });
                return _this;
            }
            TreeGrid.prototype.usePager = function () {
                return false;
            };
            TreeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TreeGrid);
            return TreeGrid;
        }(MiMovieTutorial.Northwind.OrderGrid));
        BasicSamples.TreeGrid = TreeGrid;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var ViewWithoutIDGrid = /** @class */ (function (_super) {
            __extends(ViewWithoutIDGrid, _super);
            function ViewWithoutIDGrid(container) {
                var _this = _super.call(this, container) || this;
                // this is our autoincrementing counter
                _this.nextId = 1;
                return _this;
            }
            ViewWithoutIDGrid.prototype.getColumnsKey = function () { return "Northwind.SalesByCategory"; };
            ViewWithoutIDGrid.prototype.getIdProperty = function () { return "__id"; };
            ViewWithoutIDGrid.prototype.getNameProperty = function () { return MiMovieTutorial.Northwind.SalesByCategoryRow.nameProperty; };
            ViewWithoutIDGrid.prototype.getLocalTextPrefix = function () { return MiMovieTutorial.Northwind.SalesByCategoryRow.localTextPrefix; };
            ViewWithoutIDGrid.prototype.getService = function () { return MiMovieTutorial.Northwind.SalesByCategoryService.baseUrl; };
            /**
             * This method is called to preprocess data returned from the list service
             */
            ViewWithoutIDGrid.prototype.onViewProcessData = function (response) {
                response = _super.prototype.onViewProcessData.call(this, response);
                // there is no __id property in SalesByCategoryRow but 
                // this is javascript and we can set any property of an object
                for (var _i = 0, _a = response.Entities; _i < _a.length; _i++) {
                    var x = _a[_i];
                    x.__id = this.nextId++;
                }
                return response;
            };
            ViewWithoutIDGrid.prototype.getButtons = function () {
                return [];
            };
            ViewWithoutIDGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewWithoutIDGrid);
            return ViewWithoutIDGrid;
        }(Serenity.EntityGrid));
        BasicSamples.ViewWithoutIDGrid = ViewWithoutIDGrid;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicSamples;
    (function (BasicSamples) {
        var WrappedHeadersGrid = /** @class */ (function (_super) {
            __extends(WrappedHeadersGrid, _super);
            function WrappedHeadersGrid(container) {
                return _super.call(this, container) || this;
            }
            WrappedHeadersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], WrappedHeadersGrid);
            return WrappedHeadersGrid;
        }(MiMovieTutorial.Northwind.OrderGrid));
        BasicSamples.WrappedHeadersGrid = WrappedHeadersGrid;
    })(BasicSamples = MiMovieTutorial.BasicSamples || (MiMovieTutorial.BasicSamples = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = MiMovieTutorial.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = MiMovieTutorial.LanguageList || (MiMovieTutorial.LanguageList = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('MiMovieTutorial');
        Serenity.EntityDialog.defaultLanguageList = MiMovieTutorial.LanguageList.getValue;
        Serenity.HtmlContentEditor.CKEditorBasePath = "~/Serenity.Assets/Scripts/ckeditor/";
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = MiMovieTutorial.ScriptInitialization || (MiMovieTutorial.ScriptInitialization = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    MiMovieTutorial.BasicProgressDialog = BasicProgressDialog;
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = MiMovieTutorial.DialogUtils || (MiMovieTutorial.DialogUtils = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + x + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = MiMovieTutorial.Common || (MiMovieTutorial.Common = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = MiMovieTutorial.Common || (MiMovieTutorial.Common = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    MiMovieTutorial.StaticTextBlock = StaticTextBlock;
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('LanguagePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = MiMovieTutorial.Common || (MiMovieTutorial.Common = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = MiMovieTutorial.Common || (MiMovieTutorial.Common = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = MiMovieTutorial.Common || (MiMovieTutorial.Common = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = MiMovieTutorial.Common || (MiMovieTutorial.Common = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = MiMovieTutorial.Common || (MiMovieTutorial.Common = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = MiMovieTutorial.Common || (MiMovieTutorial.Common = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = MiMovieTutorial.Common || (MiMovieTutorial.Common = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = MiMovieTutorial.Common || (MiMovieTutorial.Common = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var AlumnosDialog = /** @class */ (function (_super) {
            __extends(AlumnosDialog, _super);
            function AlumnosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.AlumnosForm(_this.idPrefix);
                return _this;
            }
            AlumnosDialog.prototype.getFormKey = function () { return INSUDE.AlumnosForm.formKey; };
            AlumnosDialog.prototype.getIdProperty = function () { return INSUDE.AlumnosRow.idProperty; };
            AlumnosDialog.prototype.getLocalTextPrefix = function () { return INSUDE.AlumnosRow.localTextPrefix; };
            AlumnosDialog.prototype.getNameProperty = function () { return INSUDE.AlumnosRow.nameProperty; };
            AlumnosDialog.prototype.getService = function () { return INSUDE.AlumnosService.baseUrl; };
            AlumnosDialog.prototype.getDeletePermission = function () { return INSUDE.AlumnosRow.deletePermission; };
            AlumnosDialog.prototype.getInsertPermission = function () { return INSUDE.AlumnosRow.insertPermission; };
            AlumnosDialog.prototype.getUpdatePermission = function () { return INSUDE.AlumnosRow.updatePermission; };
            AlumnosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AlumnosDialog);
            return AlumnosDialog;
        }(Serenity.EntityDialog));
        INSUDE.AlumnosDialog = AlumnosDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var AlumnosGrid = /** @class */ (function (_super) {
            __extends(AlumnosGrid, _super);
            function AlumnosGrid(container) {
                return _super.call(this, container) || this;
            }
            AlumnosGrid.prototype.getColumnsKey = function () { return 'INSUDE.Alumnos'; };
            AlumnosGrid.prototype.getDialogType = function () { return INSUDE.AlumnosDialog; };
            AlumnosGrid.prototype.getIdProperty = function () { return INSUDE.AlumnosRow.idProperty; };
            AlumnosGrid.prototype.getInsertPermission = function () { return INSUDE.AlumnosRow.insertPermission; };
            AlumnosGrid.prototype.getLocalTextPrefix = function () { return INSUDE.AlumnosRow.localTextPrefix; };
            AlumnosGrid.prototype.getService = function () { return INSUDE.AlumnosService.baseUrl; };
            AlumnosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AlumnosGrid);
            return AlumnosGrid;
        }(Serenity.EntityGrid));
        INSUDE.AlumnosGrid = AlumnosGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var AlumnosCarrerasDialog = /** @class */ (function (_super) {
            __extends(AlumnosCarrerasDialog, _super);
            function AlumnosCarrerasDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.AlumnosCarrerasForm(_this.idPrefix);
                return _this;
            }
            AlumnosCarrerasDialog.prototype.getFormKey = function () { return INSUDE.AlumnosCarrerasForm.formKey; };
            AlumnosCarrerasDialog.prototype.getIdProperty = function () { return INSUDE.AlumnosCarrerasRow.idProperty; };
            AlumnosCarrerasDialog.prototype.getLocalTextPrefix = function () { return INSUDE.AlumnosCarrerasRow.localTextPrefix; };
            AlumnosCarrerasDialog.prototype.getNameProperty = function () { return INSUDE.AlumnosCarrerasRow.nameProperty; };
            AlumnosCarrerasDialog.prototype.getService = function () { return INSUDE.AlumnosCarrerasService.baseUrl; };
            AlumnosCarrerasDialog.prototype.getDeletePermission = function () { return INSUDE.AlumnosCarrerasRow.deletePermission; };
            AlumnosCarrerasDialog.prototype.getInsertPermission = function () { return INSUDE.AlumnosCarrerasRow.insertPermission; };
            AlumnosCarrerasDialog.prototype.getUpdatePermission = function () { return INSUDE.AlumnosCarrerasRow.updatePermission; };
            AlumnosCarrerasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AlumnosCarrerasDialog);
            return AlumnosCarrerasDialog;
        }(Serenity.EntityDialog));
        INSUDE.AlumnosCarrerasDialog = AlumnosCarrerasDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var AlumnosCarrerasGrid = /** @class */ (function (_super) {
            __extends(AlumnosCarrerasGrid, _super);
            function AlumnosCarrerasGrid(container) {
                return _super.call(this, container) || this;
            }
            AlumnosCarrerasGrid.prototype.getColumnsKey = function () { return 'INSUDE.AlumnosCarreras'; };
            AlumnosCarrerasGrid.prototype.getDialogType = function () { return INSUDE.AlumnosCarrerasDialog; };
            AlumnosCarrerasGrid.prototype.getIdProperty = function () { return INSUDE.AlumnosCarrerasRow.idProperty; };
            AlumnosCarrerasGrid.prototype.getInsertPermission = function () { return INSUDE.AlumnosCarrerasRow.insertPermission; };
            AlumnosCarrerasGrid.prototype.getLocalTextPrefix = function () { return INSUDE.AlumnosCarrerasRow.localTextPrefix; };
            AlumnosCarrerasGrid.prototype.getService = function () { return INSUDE.AlumnosCarrerasService.baseUrl; };
            AlumnosCarrerasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AlumnosCarrerasGrid);
            return AlumnosCarrerasGrid;
        }(Serenity.EntityGrid));
        INSUDE.AlumnosCarrerasGrid = AlumnosCarrerasGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var AlumnosFamiliaresDialog = /** @class */ (function (_super) {
            __extends(AlumnosFamiliaresDialog, _super);
            function AlumnosFamiliaresDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.AlumnosFamiliaresForm(_this.idPrefix);
                return _this;
            }
            AlumnosFamiliaresDialog.prototype.getFormKey = function () { return INSUDE.AlumnosFamiliaresForm.formKey; };
            AlumnosFamiliaresDialog.prototype.getIdProperty = function () { return INSUDE.AlumnosFamiliaresRow.idProperty; };
            AlumnosFamiliaresDialog.prototype.getLocalTextPrefix = function () { return INSUDE.AlumnosFamiliaresRow.localTextPrefix; };
            AlumnosFamiliaresDialog.prototype.getNameProperty = function () { return INSUDE.AlumnosFamiliaresRow.nameProperty; };
            AlumnosFamiliaresDialog.prototype.getService = function () { return INSUDE.AlumnosFamiliaresService.baseUrl; };
            AlumnosFamiliaresDialog.prototype.getDeletePermission = function () { return INSUDE.AlumnosFamiliaresRow.deletePermission; };
            AlumnosFamiliaresDialog.prototype.getInsertPermission = function () { return INSUDE.AlumnosFamiliaresRow.insertPermission; };
            AlumnosFamiliaresDialog.prototype.getUpdatePermission = function () { return INSUDE.AlumnosFamiliaresRow.updatePermission; };
            AlumnosFamiliaresDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AlumnosFamiliaresDialog);
            return AlumnosFamiliaresDialog;
        }(Serenity.EntityDialog));
        INSUDE.AlumnosFamiliaresDialog = AlumnosFamiliaresDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var AlumnosFamiliaresGrid = /** @class */ (function (_super) {
            __extends(AlumnosFamiliaresGrid, _super);
            function AlumnosFamiliaresGrid(container) {
                return _super.call(this, container) || this;
            }
            AlumnosFamiliaresGrid.prototype.getColumnsKey = function () { return 'INSUDE.AlumnosFamiliares'; };
            AlumnosFamiliaresGrid.prototype.getDialogType = function () { return INSUDE.AlumnosFamiliaresDialog; };
            AlumnosFamiliaresGrid.prototype.getIdProperty = function () { return INSUDE.AlumnosFamiliaresRow.idProperty; };
            AlumnosFamiliaresGrid.prototype.getInsertPermission = function () { return INSUDE.AlumnosFamiliaresRow.insertPermission; };
            AlumnosFamiliaresGrid.prototype.getLocalTextPrefix = function () { return INSUDE.AlumnosFamiliaresRow.localTextPrefix; };
            AlumnosFamiliaresGrid.prototype.getService = function () { return INSUDE.AlumnosFamiliaresService.baseUrl; };
            AlumnosFamiliaresGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AlumnosFamiliaresGrid);
            return AlumnosFamiliaresGrid;
        }(Serenity.EntityGrid));
        INSUDE.AlumnosFamiliaresGrid = AlumnosFamiliaresGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var CompaniaDialog = /** @class */ (function (_super) {
            __extends(CompaniaDialog, _super);
            function CompaniaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.CompaniaForm(_this.idPrefix);
                return _this;
            }
            CompaniaDialog.prototype.getFormKey = function () { return INSUDE.CompaniaForm.formKey; };
            CompaniaDialog.prototype.getIdProperty = function () { return INSUDE.CompaniaRow.idProperty; };
            CompaniaDialog.prototype.getLocalTextPrefix = function () { return INSUDE.CompaniaRow.localTextPrefix; };
            CompaniaDialog.prototype.getNameProperty = function () { return INSUDE.CompaniaRow.nameProperty; };
            CompaniaDialog.prototype.getService = function () { return INSUDE.CompaniaService.baseUrl; };
            CompaniaDialog.prototype.getDeletePermission = function () { return INSUDE.CompaniaRow.deletePermission; };
            CompaniaDialog.prototype.getInsertPermission = function () { return INSUDE.CompaniaRow.insertPermission; };
            CompaniaDialog.prototype.getUpdatePermission = function () { return INSUDE.CompaniaRow.updatePermission; };
            CompaniaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CompaniaDialog);
            return CompaniaDialog;
        }(Serenity.EntityDialog));
        INSUDE.CompaniaDialog = CompaniaDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var CompaniaGrid = /** @class */ (function (_super) {
            __extends(CompaniaGrid, _super);
            function CompaniaGrid(container) {
                return _super.call(this, container) || this;
            }
            CompaniaGrid.prototype.getColumnsKey = function () { return 'INSUDE.Compania'; };
            CompaniaGrid.prototype.getDialogType = function () { return INSUDE.CompaniaDialog; };
            CompaniaGrid.prototype.getIdProperty = function () { return INSUDE.CompaniaRow.idProperty; };
            CompaniaGrid.prototype.getInsertPermission = function () { return INSUDE.CompaniaRow.insertPermission; };
            CompaniaGrid.prototype.getLocalTextPrefix = function () { return INSUDE.CompaniaRow.localTextPrefix; };
            CompaniaGrid.prototype.getService = function () { return INSUDE.CompaniaService.baseUrl; };
            CompaniaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CompaniaGrid);
            return CompaniaGrid;
        }(Serenity.EntityGrid));
        INSUDE.CompaniaGrid = CompaniaGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var DependenciasDialog = /** @class */ (function (_super) {
            __extends(DependenciasDialog, _super);
            function DependenciasDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.DependenciasForm(_this.idPrefix);
                return _this;
            }
            DependenciasDialog.prototype.getFormKey = function () { return INSUDE.DependenciasForm.formKey; };
            DependenciasDialog.prototype.getIdProperty = function () { return INSUDE.DependenciasRow.idProperty; };
            DependenciasDialog.prototype.getLocalTextPrefix = function () { return INSUDE.DependenciasRow.localTextPrefix; };
            DependenciasDialog.prototype.getNameProperty = function () { return INSUDE.DependenciasRow.nameProperty; };
            DependenciasDialog.prototype.getService = function () { return INSUDE.DependenciasService.baseUrl; };
            DependenciasDialog.prototype.getDeletePermission = function () { return INSUDE.DependenciasRow.deletePermission; };
            DependenciasDialog.prototype.getInsertPermission = function () { return INSUDE.DependenciasRow.insertPermission; };
            DependenciasDialog.prototype.getUpdatePermission = function () { return INSUDE.DependenciasRow.updatePermission; };
            DependenciasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DependenciasDialog);
            return DependenciasDialog;
        }(Serenity.EntityDialog));
        INSUDE.DependenciasDialog = DependenciasDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var DependenciasGrid = /** @class */ (function (_super) {
            __extends(DependenciasGrid, _super);
            function DependenciasGrid(container) {
                return _super.call(this, container) || this;
            }
            DependenciasGrid.prototype.getColumnsKey = function () { return 'INSUDE.Dependencias'; };
            DependenciasGrid.prototype.getDialogType = function () { return INSUDE.DependenciasDialog; };
            DependenciasGrid.prototype.getIdProperty = function () { return INSUDE.DependenciasRow.idProperty; };
            DependenciasGrid.prototype.getInsertPermission = function () { return INSUDE.DependenciasRow.insertPermission; };
            DependenciasGrid.prototype.getLocalTextPrefix = function () { return INSUDE.DependenciasRow.localTextPrefix; };
            DependenciasGrid.prototype.getService = function () { return INSUDE.DependenciasService.baseUrl; };
            DependenciasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DependenciasGrid);
            return DependenciasGrid;
        }(Serenity.EntityGrid));
        INSUDE.DependenciasGrid = DependenciasGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var EscuelasDialog = /** @class */ (function (_super) {
            __extends(EscuelasDialog, _super);
            function EscuelasDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.EscuelasForm(_this.idPrefix);
                return _this;
            }
            EscuelasDialog.prototype.getFormKey = function () { return INSUDE.EscuelasForm.formKey; };
            EscuelasDialog.prototype.getIdProperty = function () { return INSUDE.EscuelasRow.idProperty; };
            EscuelasDialog.prototype.getLocalTextPrefix = function () { return INSUDE.EscuelasRow.localTextPrefix; };
            EscuelasDialog.prototype.getNameProperty = function () { return INSUDE.EscuelasRow.nameProperty; };
            EscuelasDialog.prototype.getService = function () { return INSUDE.EscuelasService.baseUrl; };
            EscuelasDialog.prototype.getDeletePermission = function () { return INSUDE.EscuelasRow.deletePermission; };
            EscuelasDialog.prototype.getInsertPermission = function () { return INSUDE.EscuelasRow.insertPermission; };
            EscuelasDialog.prototype.getUpdatePermission = function () { return INSUDE.EscuelasRow.updatePermission; };
            EscuelasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EscuelasDialog);
            return EscuelasDialog;
        }(Serenity.EntityDialog));
        INSUDE.EscuelasDialog = EscuelasDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var EscuelasGrid = /** @class */ (function (_super) {
            __extends(EscuelasGrid, _super);
            function EscuelasGrid(container) {
                return _super.call(this, container) || this;
            }
            EscuelasGrid.prototype.getColumnsKey = function () { return 'INSUDE.Escuelas'; };
            EscuelasGrid.prototype.getDialogType = function () { return INSUDE.EscuelasDialog; };
            EscuelasGrid.prototype.getIdProperty = function () { return INSUDE.EscuelasRow.idProperty; };
            EscuelasGrid.prototype.getInsertPermission = function () { return INSUDE.EscuelasRow.insertPermission; };
            EscuelasGrid.prototype.getLocalTextPrefix = function () { return INSUDE.EscuelasRow.localTextPrefix; };
            EscuelasGrid.prototype.getService = function () { return INSUDE.EscuelasService.baseUrl; };
            // Agreg esto para Botones de Exportacion en Grid.ts
            EscuelasGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(MiMovieTutorial.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Insude/Escuelas/ListExcel',
                    separator: true
                }));
                buttons.push(MiMovieTutorial.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            EscuelasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EscuelasGrid);
            return EscuelasGrid;
        }(Serenity.EntityGrid));
        INSUDE.EscuelasGrid = EscuelasGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var EstadocivilDialog = /** @class */ (function (_super) {
            __extends(EstadocivilDialog, _super);
            function EstadocivilDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.EstadocivilForm(_this.idPrefix);
                return _this;
            }
            EstadocivilDialog.prototype.getFormKey = function () { return INSUDE.EstadocivilForm.formKey; };
            EstadocivilDialog.prototype.getIdProperty = function () { return INSUDE.EstadocivilRow.idProperty; };
            EstadocivilDialog.prototype.getLocalTextPrefix = function () { return INSUDE.EstadocivilRow.localTextPrefix; };
            EstadocivilDialog.prototype.getNameProperty = function () { return INSUDE.EstadocivilRow.nameProperty; };
            EstadocivilDialog.prototype.getService = function () { return INSUDE.EstadocivilService.baseUrl; };
            EstadocivilDialog.prototype.getDeletePermission = function () { return INSUDE.EstadocivilRow.deletePermission; };
            EstadocivilDialog.prototype.getInsertPermission = function () { return INSUDE.EstadocivilRow.insertPermission; };
            EstadocivilDialog.prototype.getUpdatePermission = function () { return INSUDE.EstadocivilRow.updatePermission; };
            EstadocivilDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EstadocivilDialog);
            return EstadocivilDialog;
        }(Serenity.EntityDialog));
        INSUDE.EstadocivilDialog = EstadocivilDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var EstadocivilGrid = /** @class */ (function (_super) {
            __extends(EstadocivilGrid, _super);
            function EstadocivilGrid(container) {
                return _super.call(this, container) || this;
            }
            EstadocivilGrid.prototype.getColumnsKey = function () { return 'INSUDE.Estadocivil'; };
            EstadocivilGrid.prototype.getDialogType = function () { return INSUDE.EstadocivilDialog; };
            EstadocivilGrid.prototype.getIdProperty = function () { return INSUDE.EstadocivilRow.idProperty; };
            EstadocivilGrid.prototype.getInsertPermission = function () { return INSUDE.EstadocivilRow.insertPermission; };
            EstadocivilGrid.prototype.getLocalTextPrefix = function () { return INSUDE.EstadocivilRow.localTextPrefix; };
            EstadocivilGrid.prototype.getService = function () { return INSUDE.EstadocivilService.baseUrl; };
            EstadocivilGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EstadocivilGrid);
            return EstadocivilGrid;
        }(Serenity.EntityGrid));
        INSUDE.EstadocivilGrid = EstadocivilGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var ExistenciAlmaEditor = /** @class */ (function (_super) {
            __extends(ExistenciAlmaEditor, _super);
            function ExistenciAlmaEditor(container) {
                return _super.call(this, container) || this;
            }
            ExistenciAlmaEditor.prototype.getColumnsKey = function () { return "INSUDE.Existencialma"; };
            ExistenciAlmaEditor.prototype.getDialogType = function () { return INSUDE.ExistencialmaEditDialog; };
            ExistenciAlmaEditor.prototype.getLocalTextPrefix = function () { return INSUDE.ExistencialmaRow.localTextPrefix; };
            ExistenciAlmaEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            ExistenciAlmaEditor = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.registerEditor()
            ], ExistenciAlmaEditor);
            return ExistenciAlmaEditor;
        }(MiMovieTutorial.Common.GridEditorBase));
        INSUDE.ExistenciAlmaEditor = ExistenciAlmaEditor;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var ExistencialmaDialog = /** @class */ (function (_super) {
            __extends(ExistencialmaDialog, _super);
            function ExistencialmaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.ExistencialmaForm(_this.idPrefix);
                return _this;
            }
            ExistencialmaDialog.prototype.getFormKey = function () { return INSUDE.ExistencialmaForm.formKey; };
            ExistencialmaDialog.prototype.getIdProperty = function () { return INSUDE.ExistencialmaRow.idProperty; };
            ExistencialmaDialog.prototype.getLocalTextPrefix = function () { return INSUDE.ExistencialmaRow.localTextPrefix; };
            ExistencialmaDialog.prototype.getService = function () { return INSUDE.ExistencialmaService.baseUrl; };
            ExistencialmaDialog.prototype.getDeletePermission = function () { return INSUDE.ExistencialmaRow.deletePermission; };
            ExistencialmaDialog.prototype.getInsertPermission = function () { return INSUDE.ExistencialmaRow.insertPermission; };
            ExistencialmaDialog.prototype.getUpdatePermission = function () { return INSUDE.ExistencialmaRow.updatePermission; };
            ExistencialmaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ExistencialmaDialog);
            return ExistencialmaDialog;
        }(Serenity.EntityDialog));
        INSUDE.ExistencialmaDialog = ExistencialmaDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var ExistencialmaEditDialog = /** @class */ (function (_super) {
            __extends(ExistencialmaEditDialog, _super);
            function ExistencialmaEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new INSUDE.ExistencialmaForm(_this.idPrefix);
                return _this;
            }
            ExistencialmaEditDialog.prototype.getFormKey = function () { return INSUDE.ExistencialmaForm.formKey; };
            //   protected getNameProperty() { return ExistencialmaRow.nameProperty; }
            ExistencialmaEditDialog.prototype.getLocalTextPrefix = function () { return INSUDE.ExistencialmaRow.localTextPrefix; };
            ExistencialmaEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ExistencialmaEditDialog);
            return ExistencialmaEditDialog;
        }(MiMovieTutorial.Common.GridEditorDialog));
        INSUDE.ExistencialmaEditDialog = ExistencialmaEditDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var ExistencialmaGrid = /** @class */ (function (_super) {
            __extends(ExistencialmaGrid, _super);
            function ExistencialmaGrid(container) {
                return _super.call(this, container) || this;
            }
            ExistencialmaGrid.prototype.getColumnsKey = function () { return 'INSUDE.Existencialma'; };
            ExistencialmaGrid.prototype.getDialogType = function () { return INSUDE.ExistencialmaDialog; };
            ExistencialmaGrid.prototype.getIdProperty = function () { return INSUDE.ExistencialmaRow.idProperty; };
            ExistencialmaGrid.prototype.getInsertPermission = function () { return INSUDE.ExistencialmaRow.insertPermission; };
            ExistencialmaGrid.prototype.getLocalTextPrefix = function () { return INSUDE.ExistencialmaRow.localTextPrefix; };
            ExistencialmaGrid.prototype.getService = function () { return INSUDE.ExistencialmaService.baseUrl; };
            ExistencialmaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ExistencialmaGrid);
            return ExistencialmaGrid;
        }(Serenity.EntityGrid));
        INSUDE.ExistencialmaGrid = ExistencialmaGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var FacultadesDialog = /** @class */ (function (_super) {
            __extends(FacultadesDialog, _super);
            function FacultadesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.FacultadesForm(_this.idPrefix);
                return _this;
            }
            FacultadesDialog.prototype.getFormKey = function () { return INSUDE.FacultadesForm.formKey; };
            FacultadesDialog.prototype.getIdProperty = function () { return INSUDE.FacultadesRow.idProperty; };
            FacultadesDialog.prototype.getLocalTextPrefix = function () { return INSUDE.FacultadesRow.localTextPrefix; };
            FacultadesDialog.prototype.getNameProperty = function () { return INSUDE.FacultadesRow.nameProperty; };
            FacultadesDialog.prototype.getService = function () { return INSUDE.FacultadesService.baseUrl; };
            FacultadesDialog.prototype.getDeletePermission = function () { return INSUDE.FacultadesRow.deletePermission; };
            FacultadesDialog.prototype.getInsertPermission = function () { return INSUDE.FacultadesRow.insertPermission; };
            FacultadesDialog.prototype.getUpdatePermission = function () { return INSUDE.FacultadesRow.updatePermission; };
            FacultadesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FacultadesDialog);
            return FacultadesDialog;
        }(Serenity.EntityDialog));
        INSUDE.FacultadesDialog = FacultadesDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/*******************************
 * Agrego Exportacion excel y PDF
 * ****************************/
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var FacultadesGrid = /** @class */ (function (_super) {
            __extends(FacultadesGrid, _super);
            function FacultadesGrid(container) {
                return _super.call(this, container) || this;
            }
            FacultadesGrid.prototype.getColumnsKey = function () { return 'INSUDE.Facultades'; };
            FacultadesGrid.prototype.getDialogType = function () { return INSUDE.FacultadesDialog; };
            FacultadesGrid.prototype.getIdProperty = function () { return INSUDE.FacultadesRow.idProperty; };
            FacultadesGrid.prototype.getInsertPermission = function () { return INSUDE.FacultadesRow.insertPermission; };
            FacultadesGrid.prototype.getLocalTextPrefix = function () { return INSUDE.FacultadesRow.localTextPrefix; };
            FacultadesGrid.prototype.getService = function () { return INSUDE.FacultadesService.baseUrl; };
            // Agreg esto para Botones de Exportacion
            FacultadesGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(MiMovieTutorial.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Insude/Facultades/ListExcel',
                    separator: true
                }));
                buttons.push(MiMovieTutorial.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            FacultadesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FacultadesGrid);
            return FacultadesGrid;
        }(Serenity.EntityGrid));
        INSUDE.FacultadesGrid = FacultadesGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var IndicesDialog = /** @class */ (function (_super) {
            __extends(IndicesDialog, _super);
            function IndicesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.IndicesForm(_this.idPrefix);
                return _this;
            }
            IndicesDialog.prototype.getFormKey = function () { return INSUDE.IndicesForm.formKey; };
            IndicesDialog.prototype.getIdProperty = function () { return INSUDE.IndicesRow.idProperty; };
            IndicesDialog.prototype.getLocalTextPrefix = function () { return INSUDE.IndicesRow.localTextPrefix; };
            IndicesDialog.prototype.getNameProperty = function () { return INSUDE.IndicesRow.nameProperty; };
            IndicesDialog.prototype.getService = function () { return INSUDE.IndicesService.baseUrl; };
            IndicesDialog.prototype.getDeletePermission = function () { return INSUDE.IndicesRow.deletePermission; };
            IndicesDialog.prototype.getInsertPermission = function () { return INSUDE.IndicesRow.insertPermission; };
            IndicesDialog.prototype.getUpdatePermission = function () { return INSUDE.IndicesRow.updatePermission; };
            IndicesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], IndicesDialog);
            return IndicesDialog;
        }(Serenity.EntityDialog));
        INSUDE.IndicesDialog = IndicesDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var IndicesGrid = /** @class */ (function (_super) {
            __extends(IndicesGrid, _super);
            function IndicesGrid(container) {
                return _super.call(this, container) || this;
            }
            IndicesGrid.prototype.getColumnsKey = function () { return 'INSUDE.Indices'; };
            IndicesGrid.prototype.getDialogType = function () { return INSUDE.IndicesDialog; };
            IndicesGrid.prototype.getIdProperty = function () { return INSUDE.IndicesRow.idProperty; };
            IndicesGrid.prototype.getInsertPermission = function () { return INSUDE.IndicesRow.insertPermission; };
            IndicesGrid.prototype.getLocalTextPrefix = function () { return INSUDE.IndicesRow.localTextPrefix; };
            IndicesGrid.prototype.getService = function () { return INSUDE.IndicesService.baseUrl; };
            IndicesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], IndicesGrid);
            return IndicesGrid;
        }(Serenity.EntityGrid));
        INSUDE.IndicesGrid = IndicesGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var InstructoresDialog = /** @class */ (function (_super) {
            __extends(InstructoresDialog, _super);
            function InstructoresDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.InstructoresForm(_this.idPrefix);
                return _this;
            }
            InstructoresDialog.prototype.getFormKey = function () { return INSUDE.InstructoresForm.formKey; };
            InstructoresDialog.prototype.getIdProperty = function () { return INSUDE.InstructoresRow.idProperty; };
            InstructoresDialog.prototype.getLocalTextPrefix = function () { return INSUDE.InstructoresRow.localTextPrefix; };
            InstructoresDialog.prototype.getNameProperty = function () { return INSUDE.InstructoresRow.nameProperty; };
            InstructoresDialog.prototype.getService = function () { return INSUDE.InstructoresService.baseUrl; };
            InstructoresDialog.prototype.getDeletePermission = function () { return INSUDE.InstructoresRow.deletePermission; };
            InstructoresDialog.prototype.getInsertPermission = function () { return INSUDE.InstructoresRow.insertPermission; };
            InstructoresDialog.prototype.getUpdatePermission = function () { return INSUDE.InstructoresRow.updatePermission; };
            InstructoresDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], InstructoresDialog);
            return InstructoresDialog;
        }(Serenity.EntityDialog));
        INSUDE.InstructoresDialog = InstructoresDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var InstructoresGrid = /** @class */ (function (_super) {
            __extends(InstructoresGrid, _super);
            function InstructoresGrid(container) {
                return _super.call(this, container) || this;
            }
            InstructoresGrid.prototype.getColumnsKey = function () { return 'INSUDE.Instructores'; };
            InstructoresGrid.prototype.getDialogType = function () { return INSUDE.InstructoresDialog; };
            InstructoresGrid.prototype.getIdProperty = function () { return INSUDE.InstructoresRow.idProperty; };
            InstructoresGrid.prototype.getInsertPermission = function () { return INSUDE.InstructoresRow.insertPermission; };
            InstructoresGrid.prototype.getLocalTextPrefix = function () { return INSUDE.InstructoresRow.localTextPrefix; };
            InstructoresGrid.prototype.getService = function () { return INSUDE.InstructoresService.baseUrl; };
            InstructoresGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InstructoresGrid);
            return InstructoresGrid;
        }(Serenity.EntityGrid));
        INSUDE.InstructoresGrid = InstructoresGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var MalmacenDialog = /** @class */ (function (_super) {
            __extends(MalmacenDialog, _super);
            function MalmacenDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.MalmacenForm(_this.idPrefix);
                return _this;
            }
            MalmacenDialog.prototype.getFormKey = function () { return INSUDE.MalmacenForm.formKey; };
            MalmacenDialog.prototype.getIdProperty = function () { return INSUDE.MalmacenRow.idProperty; };
            MalmacenDialog.prototype.getLocalTextPrefix = function () { return INSUDE.MalmacenRow.localTextPrefix; };
            MalmacenDialog.prototype.getNameProperty = function () { return INSUDE.MalmacenRow.nameProperty; };
            MalmacenDialog.prototype.getService = function () { return INSUDE.MalmacenService.baseUrl; };
            MalmacenDialog.prototype.getDeletePermission = function () { return INSUDE.MalmacenRow.deletePermission; };
            MalmacenDialog.prototype.getInsertPermission = function () { return INSUDE.MalmacenRow.insertPermission; };
            MalmacenDialog.prototype.getUpdatePermission = function () { return INSUDE.MalmacenRow.updatePermission; };
            MalmacenDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MalmacenDialog);
            return MalmacenDialog;
        }(Serenity.EntityDialog));
        INSUDE.MalmacenDialog = MalmacenDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var MalmacenGrid = /** @class */ (function (_super) {
            __extends(MalmacenGrid, _super);
            function MalmacenGrid(container) {
                return _super.call(this, container) || this;
            }
            MalmacenGrid.prototype.getColumnsKey = function () { return 'INSUDE.Malmacen'; };
            MalmacenGrid.prototype.getDialogType = function () { return INSUDE.MalmacenDialog; };
            MalmacenGrid.prototype.getIdProperty = function () { return INSUDE.MalmacenRow.idProperty; };
            MalmacenGrid.prototype.getInsertPermission = function () { return INSUDE.MalmacenRow.insertPermission; };
            MalmacenGrid.prototype.getLocalTextPrefix = function () { return INSUDE.MalmacenRow.localTextPrefix; };
            MalmacenGrid.prototype.getService = function () { return INSUDE.MalmacenService.baseUrl; };
            MalmacenGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MalmacenGrid);
            return MalmacenGrid;
        }(Serenity.EntityGrid));
        INSUDE.MalmacenGrid = MalmacenGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var MateriasDialog = /** @class */ (function (_super) {
            __extends(MateriasDialog, _super);
            function MateriasDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.MateriasForm(_this.idPrefix);
                return _this;
            }
            MateriasDialog.prototype.getFormKey = function () { return INSUDE.MateriasForm.formKey; };
            MateriasDialog.prototype.getIdProperty = function () { return INSUDE.MateriasRow.idProperty; };
            MateriasDialog.prototype.getLocalTextPrefix = function () { return INSUDE.MateriasRow.localTextPrefix; };
            MateriasDialog.prototype.getNameProperty = function () { return INSUDE.MateriasRow.nameProperty; };
            MateriasDialog.prototype.getService = function () { return INSUDE.MateriasService.baseUrl; };
            MateriasDialog.prototype.getDeletePermission = function () { return INSUDE.MateriasRow.deletePermission; };
            MateriasDialog.prototype.getInsertPermission = function () { return INSUDE.MateriasRow.insertPermission; };
            MateriasDialog.prototype.getUpdatePermission = function () { return INSUDE.MateriasRow.updatePermission; };
            MateriasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MateriasDialog);
            return MateriasDialog;
        }(Serenity.EntityDialog));
        INSUDE.MateriasDialog = MateriasDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var MateriasGrid = /** @class */ (function (_super) {
            __extends(MateriasGrid, _super);
            function MateriasGrid(container) {
                return _super.call(this, container) || this;
            }
            MateriasGrid.prototype.getColumnsKey = function () { return 'INSUDE.Materias'; };
            MateriasGrid.prototype.getDialogType = function () { return INSUDE.MateriasDialog; };
            MateriasGrid.prototype.getIdProperty = function () { return INSUDE.MateriasRow.idProperty; };
            MateriasGrid.prototype.getInsertPermission = function () { return INSUDE.MateriasRow.insertPermission; };
            MateriasGrid.prototype.getLocalTextPrefix = function () { return INSUDE.MateriasRow.localTextPrefix; };
            MateriasGrid.prototype.getService = function () { return INSUDE.MateriasService.baseUrl; };
            MateriasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MateriasGrid);
            return MateriasGrid;
        }(Serenity.EntityGrid));
        INSUDE.MateriasGrid = MateriasGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var MproductDialog = /** @class */ (function (_super) {
            __extends(MproductDialog, _super);
            function MproductDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.MproductForm(_this.idPrefix);
                return _this;
            }
            MproductDialog.prototype.getFormKey = function () { return INSUDE.MproductForm.formKey; };
            MproductDialog.prototype.getIdProperty = function () { return INSUDE.MproductRow.idProperty; };
            MproductDialog.prototype.getLocalTextPrefix = function () { return INSUDE.MproductRow.localTextPrefix; };
            MproductDialog.prototype.getNameProperty = function () { return INSUDE.MproductRow.nameProperty; };
            MproductDialog.prototype.getService = function () { return INSUDE.MproductService.baseUrl; };
            MproductDialog.prototype.getDeletePermission = function () { return INSUDE.MproductRow.deletePermission; };
            MproductDialog.prototype.getInsertPermission = function () { return INSUDE.MproductRow.insertPermission; };
            MproductDialog.prototype.getUpdatePermission = function () { return INSUDE.MproductRow.updatePermission; };
            MproductDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MproductDialog);
            return MproductDialog;
        }(Serenity.EntityDialog));
        INSUDE.MproductDialog = MproductDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var MproductGrid = /** @class */ (function (_super) {
            __extends(MproductGrid, _super);
            function MproductGrid(container) {
                return _super.call(this, container) || this;
            }
            MproductGrid.prototype.getColumnsKey = function () { return 'INSUDE.Mproduct'; };
            MproductGrid.prototype.getDialogType = function () { return INSUDE.MproductDialog; };
            MproductGrid.prototype.getIdProperty = function () { return INSUDE.MproductRow.idProperty; };
            MproductGrid.prototype.getInsertPermission = function () { return INSUDE.MproductRow.insertPermission; };
            MproductGrid.prototype.getLocalTextPrefix = function () { return INSUDE.MproductRow.localTextPrefix; };
            MproductGrid.prototype.getService = function () { return INSUDE.MproductService.baseUrl; };
            MproductGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MproductGrid);
            return MproductGrid;
        }(Serenity.EntityGrid));
        INSUDE.MproductGrid = MproductGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var NacionalidadDialog = /** @class */ (function (_super) {
            __extends(NacionalidadDialog, _super);
            function NacionalidadDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.NacionalidadForm(_this.idPrefix);
                return _this;
            }
            NacionalidadDialog.prototype.getFormKey = function () { return INSUDE.NacionalidadForm.formKey; };
            NacionalidadDialog.prototype.getIdProperty = function () { return INSUDE.NacionalidadRow.idProperty; };
            NacionalidadDialog.prototype.getLocalTextPrefix = function () { return INSUDE.NacionalidadRow.localTextPrefix; };
            NacionalidadDialog.prototype.getNameProperty = function () { return INSUDE.NacionalidadRow.nameProperty; };
            NacionalidadDialog.prototype.getService = function () { return INSUDE.NacionalidadService.baseUrl; };
            NacionalidadDialog.prototype.getDeletePermission = function () { return INSUDE.NacionalidadRow.deletePermission; };
            NacionalidadDialog.prototype.getInsertPermission = function () { return INSUDE.NacionalidadRow.insertPermission; };
            NacionalidadDialog.prototype.getUpdatePermission = function () { return INSUDE.NacionalidadRow.updatePermission; };
            NacionalidadDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NacionalidadDialog);
            return NacionalidadDialog;
        }(Serenity.EntityDialog));
        INSUDE.NacionalidadDialog = NacionalidadDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var NacionalidadGrid = /** @class */ (function (_super) {
            __extends(NacionalidadGrid, _super);
            function NacionalidadGrid(container) {
                return _super.call(this, container) || this;
            }
            NacionalidadGrid.prototype.getColumnsKey = function () { return 'INSUDE.Nacionalidad'; };
            NacionalidadGrid.prototype.getDialogType = function () { return INSUDE.NacionalidadDialog; };
            NacionalidadGrid.prototype.getIdProperty = function () { return INSUDE.NacionalidadRow.idProperty; };
            NacionalidadGrid.prototype.getInsertPermission = function () { return INSUDE.NacionalidadRow.insertPermission; };
            NacionalidadGrid.prototype.getLocalTextPrefix = function () { return INSUDE.NacionalidadRow.localTextPrefix; };
            NacionalidadGrid.prototype.getService = function () { return INSUDE.NacionalidadService.baseUrl; };
            NacionalidadGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], NacionalidadGrid);
            return NacionalidadGrid;
        }(Serenity.EntityGrid));
        INSUDE.NacionalidadGrid = NacionalidadGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var NivelesPorCarreraDialog = /** @class */ (function (_super) {
            __extends(NivelesPorCarreraDialog, _super);
            function NivelesPorCarreraDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.NivelesPorCarreraForm(_this.idPrefix);
                return _this;
            }
            NivelesPorCarreraDialog.prototype.getFormKey = function () { return INSUDE.NivelesPorCarreraForm.formKey; };
            NivelesPorCarreraDialog.prototype.getIdProperty = function () { return INSUDE.NivelesPorCarreraRow.idProperty; };
            NivelesPorCarreraDialog.prototype.getLocalTextPrefix = function () { return INSUDE.NivelesPorCarreraRow.localTextPrefix; };
            NivelesPorCarreraDialog.prototype.getNameProperty = function () { return INSUDE.NivelesPorCarreraRow.nameProperty; };
            NivelesPorCarreraDialog.prototype.getService = function () { return INSUDE.NivelesPorCarreraService.baseUrl; };
            NivelesPorCarreraDialog.prototype.getDeletePermission = function () { return INSUDE.NivelesPorCarreraRow.deletePermission; };
            NivelesPorCarreraDialog.prototype.getInsertPermission = function () { return INSUDE.NivelesPorCarreraRow.insertPermission; };
            NivelesPorCarreraDialog.prototype.getUpdatePermission = function () { return INSUDE.NivelesPorCarreraRow.updatePermission; };
            NivelesPorCarreraDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NivelesPorCarreraDialog);
            return NivelesPorCarreraDialog;
        }(Serenity.EntityDialog));
        INSUDE.NivelesPorCarreraDialog = NivelesPorCarreraDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var NivelesPorCarreraGrid = /** @class */ (function (_super) {
            __extends(NivelesPorCarreraGrid, _super);
            function NivelesPorCarreraGrid(container) {
                return _super.call(this, container) || this;
            }
            NivelesPorCarreraGrid.prototype.getColumnsKey = function () { return 'INSUDE.NivelesPorCarrera'; };
            NivelesPorCarreraGrid.prototype.getDialogType = function () { return INSUDE.NivelesPorCarreraDialog; };
            NivelesPorCarreraGrid.prototype.getIdProperty = function () { return INSUDE.NivelesPorCarreraRow.idProperty; };
            NivelesPorCarreraGrid.prototype.getInsertPermission = function () { return INSUDE.NivelesPorCarreraRow.insertPermission; };
            NivelesPorCarreraGrid.prototype.getLocalTextPrefix = function () { return INSUDE.NivelesPorCarreraRow.localTextPrefix; };
            NivelesPorCarreraGrid.prototype.getService = function () { return INSUDE.NivelesPorCarreraService.baseUrl; };
            NivelesPorCarreraGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], NivelesPorCarreraGrid);
            return NivelesPorCarreraGrid;
        }(Serenity.EntityGrid));
        INSUDE.NivelesPorCarreraGrid = NivelesPorCarreraGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var PaisDialog = /** @class */ (function (_super) {
            __extends(PaisDialog, _super);
            function PaisDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.PaisForm(_this.idPrefix);
                return _this;
            }
            PaisDialog.prototype.getFormKey = function () { return INSUDE.PaisForm.formKey; };
            PaisDialog.prototype.getIdProperty = function () { return INSUDE.PaisRow.idProperty; };
            PaisDialog.prototype.getLocalTextPrefix = function () { return INSUDE.PaisRow.localTextPrefix; };
            PaisDialog.prototype.getNameProperty = function () { return INSUDE.PaisRow.nameProperty; };
            PaisDialog.prototype.getService = function () { return INSUDE.PaisService.baseUrl; };
            PaisDialog.prototype.getDeletePermission = function () { return INSUDE.PaisRow.deletePermission; };
            PaisDialog.prototype.getInsertPermission = function () { return INSUDE.PaisRow.insertPermission; };
            PaisDialog.prototype.getUpdatePermission = function () { return INSUDE.PaisRow.updatePermission; };
            PaisDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PaisDialog);
            return PaisDialog;
        }(Serenity.EntityDialog));
        INSUDE.PaisDialog = PaisDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var PaisGrid = /** @class */ (function (_super) {
            __extends(PaisGrid, _super);
            function PaisGrid(container) {
                return _super.call(this, container) || this;
            }
            PaisGrid.prototype.getColumnsKey = function () { return 'INSUDE.Pais'; };
            PaisGrid.prototype.getDialogType = function () { return INSUDE.PaisDialog; };
            PaisGrid.prototype.getIdProperty = function () { return INSUDE.PaisRow.idProperty; };
            PaisGrid.prototype.getInsertPermission = function () { return INSUDE.PaisRow.insertPermission; };
            PaisGrid.prototype.getLocalTextPrefix = function () { return INSUDE.PaisRow.localTextPrefix; };
            PaisGrid.prototype.getService = function () { return INSUDE.PaisService.baseUrl; };
            PaisGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PaisGrid);
            return PaisGrid;
        }(Serenity.EntityGrid));
        INSUDE.PaisGrid = PaisGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var PensumDialog = /** @class */ (function (_super) {
            __extends(PensumDialog, _super);
            function PensumDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.PensumForm(_this.idPrefix);
                return _this;
            }
            PensumDialog.prototype.getFormKey = function () { return INSUDE.PensumForm.formKey; };
            PensumDialog.prototype.getIdProperty = function () { return INSUDE.PensumRow.idProperty; };
            PensumDialog.prototype.getLocalTextPrefix = function () { return INSUDE.PensumRow.localTextPrefix; };
            PensumDialog.prototype.getNameProperty = function () { return INSUDE.PensumRow.nameProperty; };
            PensumDialog.prototype.getService = function () { return INSUDE.PensumService.baseUrl; };
            PensumDialog.prototype.getDeletePermission = function () { return INSUDE.PensumRow.deletePermission; };
            PensumDialog.prototype.getInsertPermission = function () { return INSUDE.PensumRow.insertPermission; };
            PensumDialog.prototype.getUpdatePermission = function () { return INSUDE.PensumRow.updatePermission; };
            PensumDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PensumDialog);
            return PensumDialog;
        }(Serenity.EntityDialog));
        INSUDE.PensumDialog = PensumDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var PensumGrid = /** @class */ (function (_super) {
            __extends(PensumGrid, _super);
            function PensumGrid(container) {
                return _super.call(this, container) || this;
            }
            PensumGrid.prototype.getColumnsKey = function () { return 'INSUDE.Pensum'; };
            PensumGrid.prototype.getDialogType = function () { return INSUDE.PensumDialog; };
            PensumGrid.prototype.getIdProperty = function () { return INSUDE.PensumRow.idProperty; };
            PensumGrid.prototype.getInsertPermission = function () { return INSUDE.PensumRow.insertPermission; };
            PensumGrid.prototype.getLocalTextPrefix = function () { return INSUDE.PensumRow.localTextPrefix; };
            PensumGrid.prototype.getService = function () { return INSUDE.PensumService.baseUrl; };
            PensumGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(MiMovieTutorial.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Insude/Pensum/ListExcel',
                    separator: true
                }));
                buttons.push(MiMovieTutorial.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            PensumGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PensumGrid);
            return PensumGrid;
        }(Serenity.EntityGrid));
        INSUDE.PensumGrid = PensumGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var PrivilegiosDialog = /** @class */ (function (_super) {
            __extends(PrivilegiosDialog, _super);
            function PrivilegiosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.PrivilegiosForm(_this.idPrefix);
                return _this;
            }
            PrivilegiosDialog.prototype.getFormKey = function () { return INSUDE.PrivilegiosForm.formKey; };
            PrivilegiosDialog.prototype.getIdProperty = function () { return INSUDE.PrivilegiosRow.idProperty; };
            PrivilegiosDialog.prototype.getLocalTextPrefix = function () { return INSUDE.PrivilegiosRow.localTextPrefix; };
            PrivilegiosDialog.prototype.getNameProperty = function () { return INSUDE.PrivilegiosRow.nameProperty; };
            PrivilegiosDialog.prototype.getService = function () { return INSUDE.PrivilegiosService.baseUrl; };
            PrivilegiosDialog.prototype.getDeletePermission = function () { return INSUDE.PrivilegiosRow.deletePermission; };
            PrivilegiosDialog.prototype.getInsertPermission = function () { return INSUDE.PrivilegiosRow.insertPermission; };
            PrivilegiosDialog.prototype.getUpdatePermission = function () { return INSUDE.PrivilegiosRow.updatePermission; };
            PrivilegiosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PrivilegiosDialog);
            return PrivilegiosDialog;
        }(Serenity.EntityDialog));
        INSUDE.PrivilegiosDialog = PrivilegiosDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var PrivilegiosGrid = /** @class */ (function (_super) {
            __extends(PrivilegiosGrid, _super);
            function PrivilegiosGrid(container) {
                return _super.call(this, container) || this;
            }
            PrivilegiosGrid.prototype.getColumnsKey = function () { return 'INSUDE.Privilegios'; };
            PrivilegiosGrid.prototype.getDialogType = function () { return INSUDE.PrivilegiosDialog; };
            PrivilegiosGrid.prototype.getIdProperty = function () { return INSUDE.PrivilegiosRow.idProperty; };
            PrivilegiosGrid.prototype.getInsertPermission = function () { return INSUDE.PrivilegiosRow.insertPermission; };
            PrivilegiosGrid.prototype.getLocalTextPrefix = function () { return INSUDE.PrivilegiosRow.localTextPrefix; };
            PrivilegiosGrid.prototype.getService = function () { return INSUDE.PrivilegiosService.baseUrl; };
            PrivilegiosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PrivilegiosGrid);
            return PrivilegiosGrid;
        }(Serenity.EntityGrid));
        INSUDE.PrivilegiosGrid = PrivilegiosGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var PromocionesDialog = /** @class */ (function (_super) {
            __extends(PromocionesDialog, _super);
            function PromocionesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.PromocionesForm(_this.idPrefix);
                return _this;
            }
            PromocionesDialog.prototype.getFormKey = function () { return INSUDE.PromocionesForm.formKey; };
            PromocionesDialog.prototype.getIdProperty = function () { return INSUDE.PromocionesRow.idProperty; };
            PromocionesDialog.prototype.getLocalTextPrefix = function () { return INSUDE.PromocionesRow.localTextPrefix; };
            PromocionesDialog.prototype.getNameProperty = function () { return INSUDE.PromocionesRow.nameProperty; };
            PromocionesDialog.prototype.getService = function () { return INSUDE.PromocionesService.baseUrl; };
            PromocionesDialog.prototype.getDeletePermission = function () { return INSUDE.PromocionesRow.deletePermission; };
            PromocionesDialog.prototype.getInsertPermission = function () { return INSUDE.PromocionesRow.insertPermission; };
            PromocionesDialog.prototype.getUpdatePermission = function () { return INSUDE.PromocionesRow.updatePermission; };
            PromocionesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PromocionesDialog);
            return PromocionesDialog;
        }(Serenity.EntityDialog));
        INSUDE.PromocionesDialog = PromocionesDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var PromocionesGrid = /** @class */ (function (_super) {
            __extends(PromocionesGrid, _super);
            function PromocionesGrid(container) {
                return _super.call(this, container) || this;
            }
            PromocionesGrid.prototype.getColumnsKey = function () { return 'INSUDE.Promociones'; };
            PromocionesGrid.prototype.getDialogType = function () { return INSUDE.PromocionesDialog; };
            PromocionesGrid.prototype.getIdProperty = function () { return INSUDE.PromocionesRow.idProperty; };
            PromocionesGrid.prototype.getInsertPermission = function () { return INSUDE.PromocionesRow.insertPermission; };
            PromocionesGrid.prototype.getLocalTextPrefix = function () { return INSUDE.PromocionesRow.localTextPrefix; };
            PromocionesGrid.prototype.getService = function () { return INSUDE.PromocionesService.baseUrl; };
            PromocionesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PromocionesGrid);
            return PromocionesGrid;
        }(Serenity.EntityGrid));
        INSUDE.PromocionesGrid = PromocionesGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var RangosDialog = /** @class */ (function (_super) {
            __extends(RangosDialog, _super);
            function RangosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.RangosForm(_this.idPrefix);
                return _this;
            }
            RangosDialog.prototype.getFormKey = function () { return INSUDE.RangosForm.formKey; };
            RangosDialog.prototype.getIdProperty = function () { return INSUDE.RangosRow.idProperty; };
            RangosDialog.prototype.getLocalTextPrefix = function () { return INSUDE.RangosRow.localTextPrefix; };
            RangosDialog.prototype.getNameProperty = function () { return INSUDE.RangosRow.nameProperty; };
            RangosDialog.prototype.getService = function () { return INSUDE.RangosService.baseUrl; };
            RangosDialog.prototype.getDeletePermission = function () { return INSUDE.RangosRow.deletePermission; };
            RangosDialog.prototype.getInsertPermission = function () { return INSUDE.RangosRow.insertPermission; };
            RangosDialog.prototype.getUpdatePermission = function () { return INSUDE.RangosRow.updatePermission; };
            RangosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RangosDialog);
            return RangosDialog;
        }(Serenity.EntityDialog));
        INSUDE.RangosDialog = RangosDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var RangosGrid = /** @class */ (function (_super) {
            __extends(RangosGrid, _super);
            function RangosGrid(container) {
                return _super.call(this, container) || this;
            }
            RangosGrid.prototype.getColumnsKey = function () { return 'INSUDE.Rangos'; };
            RangosGrid.prototype.getDialogType = function () { return INSUDE.RangosDialog; };
            RangosGrid.prototype.getIdProperty = function () { return INSUDE.RangosRow.idProperty; };
            RangosGrid.prototype.getInsertPermission = function () { return INSUDE.RangosRow.insertPermission; };
            RangosGrid.prototype.getLocalTextPrefix = function () { return INSUDE.RangosRow.localTextPrefix; };
            RangosGrid.prototype.getService = function () { return INSUDE.RangosService.baseUrl; };
            // Agreg esto para Botones de Exportacion
            RangosGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(MiMovieTutorial.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Insude/Rangos/ListExcel',
                    separator: true
                }));
                buttons.push(MiMovieTutorial.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            RangosGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], RangosGrid);
            return RangosGrid;
        }(Serenity.EntityGrid));
        INSUDE.RangosGrid = RangosGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var RequisitosDialog = /** @class */ (function (_super) {
            __extends(RequisitosDialog, _super);
            function RequisitosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.RequisitosForm(_this.idPrefix);
                return _this;
            }
            RequisitosDialog.prototype.getFormKey = function () { return INSUDE.RequisitosForm.formKey; };
            RequisitosDialog.prototype.getIdProperty = function () { return INSUDE.RequisitosRow.idProperty; };
            RequisitosDialog.prototype.getLocalTextPrefix = function () { return INSUDE.RequisitosRow.localTextPrefix; };
            RequisitosDialog.prototype.getNameProperty = function () { return INSUDE.RequisitosRow.nameProperty; };
            RequisitosDialog.prototype.getService = function () { return INSUDE.RequisitosService.baseUrl; };
            RequisitosDialog.prototype.getDeletePermission = function () { return INSUDE.RequisitosRow.deletePermission; };
            RequisitosDialog.prototype.getInsertPermission = function () { return INSUDE.RequisitosRow.insertPermission; };
            RequisitosDialog.prototype.getUpdatePermission = function () { return INSUDE.RequisitosRow.updatePermission; };
            RequisitosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RequisitosDialog);
            return RequisitosDialog;
        }(Serenity.EntityDialog));
        INSUDE.RequisitosDialog = RequisitosDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var RequisitosGrid = /** @class */ (function (_super) {
            __extends(RequisitosGrid, _super);
            function RequisitosGrid(container) {
                return _super.call(this, container) || this;
            }
            RequisitosGrid.prototype.getColumnsKey = function () { return 'INSUDE.Requisitos'; };
            RequisitosGrid.prototype.getDialogType = function () { return INSUDE.RequisitosDialog; };
            RequisitosGrid.prototype.getIdProperty = function () { return INSUDE.RequisitosRow.idProperty; };
            RequisitosGrid.prototype.getInsertPermission = function () { return INSUDE.RequisitosRow.insertPermission; };
            RequisitosGrid.prototype.getLocalTextPrefix = function () { return INSUDE.RequisitosRow.localTextPrefix; };
            RequisitosGrid.prototype.getService = function () { return INSUDE.RequisitosService.baseUrl; };
            RequisitosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RequisitosGrid);
            return RequisitosGrid;
        }(Serenity.EntityGrid));
        INSUDE.RequisitosGrid = RequisitosGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var ServiciosEstudiantilesDialog = /** @class */ (function (_super) {
            __extends(ServiciosEstudiantilesDialog, _super);
            function ServiciosEstudiantilesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.ServiciosEstudiantilesForm(_this.idPrefix);
                return _this;
            }
            ServiciosEstudiantilesDialog.prototype.getFormKey = function () { return INSUDE.ServiciosEstudiantilesForm.formKey; };
            ServiciosEstudiantilesDialog.prototype.getIdProperty = function () { return INSUDE.ServiciosEstudiantilesRow.idProperty; };
            ServiciosEstudiantilesDialog.prototype.getLocalTextPrefix = function () { return INSUDE.ServiciosEstudiantilesRow.localTextPrefix; };
            ServiciosEstudiantilesDialog.prototype.getNameProperty = function () { return INSUDE.ServiciosEstudiantilesRow.nameProperty; };
            ServiciosEstudiantilesDialog.prototype.getService = function () { return INSUDE.ServiciosEstudiantilesService.baseUrl; };
            ServiciosEstudiantilesDialog.prototype.getDeletePermission = function () { return INSUDE.ServiciosEstudiantilesRow.deletePermission; };
            ServiciosEstudiantilesDialog.prototype.getInsertPermission = function () { return INSUDE.ServiciosEstudiantilesRow.insertPermission; };
            ServiciosEstudiantilesDialog.prototype.getUpdatePermission = function () { return INSUDE.ServiciosEstudiantilesRow.updatePermission; };
            ServiciosEstudiantilesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ServiciosEstudiantilesDialog);
            return ServiciosEstudiantilesDialog;
        }(Serenity.EntityDialog));
        INSUDE.ServiciosEstudiantilesDialog = ServiciosEstudiantilesDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var ServiciosEstudiantilesGrid = /** @class */ (function (_super) {
            __extends(ServiciosEstudiantilesGrid, _super);
            function ServiciosEstudiantilesGrid(container) {
                return _super.call(this, container) || this;
            }
            ServiciosEstudiantilesGrid.prototype.getColumnsKey = function () { return 'INSUDE.ServiciosEstudiantiles'; };
            ServiciosEstudiantilesGrid.prototype.getDialogType = function () { return INSUDE.ServiciosEstudiantilesDialog; };
            ServiciosEstudiantilesGrid.prototype.getIdProperty = function () { return INSUDE.ServiciosEstudiantilesRow.idProperty; };
            ServiciosEstudiantilesGrid.prototype.getInsertPermission = function () { return INSUDE.ServiciosEstudiantilesRow.insertPermission; };
            ServiciosEstudiantilesGrid.prototype.getLocalTextPrefix = function () { return INSUDE.ServiciosEstudiantilesRow.localTextPrefix; };
            ServiciosEstudiantilesGrid.prototype.getService = function () { return INSUDE.ServiciosEstudiantilesService.baseUrl; };
            ServiciosEstudiantilesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ServiciosEstudiantilesGrid);
            return ServiciosEstudiantilesGrid;
        }(Serenity.EntityGrid));
        INSUDE.ServiciosEstudiantilesGrid = ServiciosEstudiantilesGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var SexoDialog = /** @class */ (function (_super) {
            __extends(SexoDialog, _super);
            function SexoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.SexoForm(_this.idPrefix);
                return _this;
            }
            SexoDialog.prototype.getFormKey = function () { return INSUDE.SexoForm.formKey; };
            SexoDialog.prototype.getIdProperty = function () { return INSUDE.SexoRow.idProperty; };
            SexoDialog.prototype.getLocalTextPrefix = function () { return INSUDE.SexoRow.localTextPrefix; };
            SexoDialog.prototype.getNameProperty = function () { return INSUDE.SexoRow.nameProperty; };
            SexoDialog.prototype.getService = function () { return INSUDE.SexoService.baseUrl; };
            SexoDialog.prototype.getDeletePermission = function () { return INSUDE.SexoRow.deletePermission; };
            SexoDialog.prototype.getInsertPermission = function () { return INSUDE.SexoRow.insertPermission; };
            SexoDialog.prototype.getUpdatePermission = function () { return INSUDE.SexoRow.updatePermission; };
            SexoDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SexoDialog);
            return SexoDialog;
        }(Serenity.EntityDialog));
        INSUDE.SexoDialog = SexoDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var SexoGrid = /** @class */ (function (_super) {
            __extends(SexoGrid, _super);
            function SexoGrid(container) {
                return _super.call(this, container) || this;
            }
            SexoGrid.prototype.getColumnsKey = function () { return 'INSUDE.Sexo'; };
            SexoGrid.prototype.getDialogType = function () { return INSUDE.SexoDialog; };
            SexoGrid.prototype.getIdProperty = function () { return INSUDE.SexoRow.idProperty; };
            SexoGrid.prototype.getInsertPermission = function () { return INSUDE.SexoRow.insertPermission; };
            SexoGrid.prototype.getLocalTextPrefix = function () { return INSUDE.SexoRow.localTextPrefix; };
            SexoGrid.prototype.getService = function () { return INSUDE.SexoService.baseUrl; };
            SexoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SexoGrid);
            return SexoGrid;
        }(Serenity.EntityGrid));
        INSUDE.SexoGrid = SexoGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var StatusDialog = /** @class */ (function (_super) {
            __extends(StatusDialog, _super);
            function StatusDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.StatusForm(_this.idPrefix);
                return _this;
            }
            StatusDialog.prototype.getFormKey = function () { return INSUDE.StatusForm.formKey; };
            StatusDialog.prototype.getIdProperty = function () { return INSUDE.StatusRow.idProperty; };
            StatusDialog.prototype.getLocalTextPrefix = function () { return INSUDE.StatusRow.localTextPrefix; };
            StatusDialog.prototype.getNameProperty = function () { return INSUDE.StatusRow.nameProperty; };
            StatusDialog.prototype.getService = function () { return INSUDE.StatusService.baseUrl; };
            StatusDialog.prototype.getDeletePermission = function () { return INSUDE.StatusRow.deletePermission; };
            StatusDialog.prototype.getInsertPermission = function () { return INSUDE.StatusRow.insertPermission; };
            StatusDialog.prototype.getUpdatePermission = function () { return INSUDE.StatusRow.updatePermission; };
            StatusDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StatusDialog);
            return StatusDialog;
        }(Serenity.EntityDialog));
        INSUDE.StatusDialog = StatusDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var StatusGrid = /** @class */ (function (_super) {
            __extends(StatusGrid, _super);
            function StatusGrid(container) {
                return _super.call(this, container) || this;
            }
            StatusGrid.prototype.getColumnsKey = function () { return 'INSUDE.Status'; };
            StatusGrid.prototype.getDialogType = function () { return INSUDE.StatusDialog; };
            StatusGrid.prototype.getIdProperty = function () { return INSUDE.StatusRow.idProperty; };
            StatusGrid.prototype.getInsertPermission = function () { return INSUDE.StatusRow.insertPermission; };
            StatusGrid.prototype.getLocalTextPrefix = function () { return INSUDE.StatusRow.localTextPrefix; };
            StatusGrid.prototype.getService = function () { return INSUDE.StatusService.baseUrl; };
            StatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], StatusGrid);
            return StatusGrid;
        }(Serenity.EntityGrid));
        INSUDE.StatusGrid = StatusGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var TipoDeCalificacionDialog = /** @class */ (function (_super) {
            __extends(TipoDeCalificacionDialog, _super);
            function TipoDeCalificacionDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.TipoDeCalificacionForm(_this.idPrefix);
                return _this;
            }
            TipoDeCalificacionDialog.prototype.getFormKey = function () { return INSUDE.TipoDeCalificacionForm.formKey; };
            TipoDeCalificacionDialog.prototype.getIdProperty = function () { return INSUDE.TipoDeCalificacionRow.idProperty; };
            TipoDeCalificacionDialog.prototype.getLocalTextPrefix = function () { return INSUDE.TipoDeCalificacionRow.localTextPrefix; };
            TipoDeCalificacionDialog.prototype.getNameProperty = function () { return INSUDE.TipoDeCalificacionRow.nameProperty; };
            TipoDeCalificacionDialog.prototype.getService = function () { return INSUDE.TipoDeCalificacionService.baseUrl; };
            TipoDeCalificacionDialog.prototype.getDeletePermission = function () { return INSUDE.TipoDeCalificacionRow.deletePermission; };
            TipoDeCalificacionDialog.prototype.getInsertPermission = function () { return INSUDE.TipoDeCalificacionRow.insertPermission; };
            TipoDeCalificacionDialog.prototype.getUpdatePermission = function () { return INSUDE.TipoDeCalificacionRow.updatePermission; };
            TipoDeCalificacionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TipoDeCalificacionDialog);
            return TipoDeCalificacionDialog;
        }(Serenity.EntityDialog));
        INSUDE.TipoDeCalificacionDialog = TipoDeCalificacionDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var TipoDeCalificacionGrid = /** @class */ (function (_super) {
            __extends(TipoDeCalificacionGrid, _super);
            function TipoDeCalificacionGrid(container) {
                return _super.call(this, container) || this;
            }
            TipoDeCalificacionGrid.prototype.getColumnsKey = function () { return 'INSUDE.TipoDeCalificacion'; };
            TipoDeCalificacionGrid.prototype.getDialogType = function () { return INSUDE.TipoDeCalificacionDialog; };
            TipoDeCalificacionGrid.prototype.getIdProperty = function () { return INSUDE.TipoDeCalificacionRow.idProperty; };
            TipoDeCalificacionGrid.prototype.getInsertPermission = function () { return INSUDE.TipoDeCalificacionRow.insertPermission; };
            TipoDeCalificacionGrid.prototype.getLocalTextPrefix = function () { return INSUDE.TipoDeCalificacionRow.localTextPrefix; };
            TipoDeCalificacionGrid.prototype.getService = function () { return INSUDE.TipoDeCalificacionService.baseUrl; };
            TipoDeCalificacionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TipoDeCalificacionGrid);
            return TipoDeCalificacionGrid;
        }(Serenity.EntityGrid));
        INSUDE.TipoDeCalificacionGrid = TipoDeCalificacionGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var TitulosDialog = /** @class */ (function (_super) {
            __extends(TitulosDialog, _super);
            function TitulosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new INSUDE.TitulosForm(_this.idPrefix);
                return _this;
            }
            TitulosDialog.prototype.getFormKey = function () { return INSUDE.TitulosForm.formKey; };
            TitulosDialog.prototype.getIdProperty = function () { return INSUDE.TitulosRow.idProperty; };
            TitulosDialog.prototype.getLocalTextPrefix = function () { return INSUDE.TitulosRow.localTextPrefix; };
            TitulosDialog.prototype.getNameProperty = function () { return INSUDE.TitulosRow.nameProperty; };
            TitulosDialog.prototype.getService = function () { return INSUDE.TitulosService.baseUrl; };
            TitulosDialog.prototype.getDeletePermission = function () { return INSUDE.TitulosRow.deletePermission; };
            TitulosDialog.prototype.getInsertPermission = function () { return INSUDE.TitulosRow.insertPermission; };
            TitulosDialog.prototype.getUpdatePermission = function () { return INSUDE.TitulosRow.updatePermission; };
            TitulosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TitulosDialog);
            return TitulosDialog;
        }(Serenity.EntityDialog));
        INSUDE.TitulosDialog = TitulosDialog;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var INSUDE;
    (function (INSUDE) {
        var TitulosGrid = /** @class */ (function (_super) {
            __extends(TitulosGrid, _super);
            function TitulosGrid(container) {
                return _super.call(this, container) || this;
            }
            TitulosGrid.prototype.getColumnsKey = function () { return 'INSUDE.Titulos'; };
            TitulosGrid.prototype.getDialogType = function () { return INSUDE.TitulosDialog; };
            TitulosGrid.prototype.getIdProperty = function () { return INSUDE.TitulosRow.idProperty; };
            TitulosGrid.prototype.getInsertPermission = function () { return INSUDE.TitulosRow.insertPermission; };
            TitulosGrid.prototype.getLocalTextPrefix = function () { return INSUDE.TitulosRow.localTextPrefix; };
            TitulosGrid.prototype.getService = function () { return INSUDE.TitulosService.baseUrl; };
            TitulosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TitulosGrid);
            return TitulosGrid;
        }(Serenity.EntityGrid));
        INSUDE.TitulosGrid = TitulosGrid;
    })(INSUDE = MiMovieTutorial.INSUDE || (MiMovieTutorial.INSUDE = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $.fn['vegas'] && $('body')['vegas']({
                    delay: 30000,
                    cover: true,
                    overlay: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U" +
                        "/gAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAAsQAAALEAVuRnQsAAAAWdEVYdENyZWF0" +
                        "aW9uIFRpbWUAMDQvMTMvMTGrW0T6AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAAxJREFUCJljaGBgAAABhACBrONIPgAAAABJRU5ErkJggg==",
                    slides: [
                        { src: Q.resolveUrl("~/Content/site/slides/slide1.jpg"), transition: 'fade' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide2.jpg"), transition: 'zoomOut' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide3.jpg"), transition: 'swirlLeft' }
                    ]
                });
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel.prototype.redirectToReturnUrl = function () {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            };
            LoginPanel.prototype.getTemplate = function () {
                return "\n<div class=\"flex-layout\">\n    <div class=\"logo\"></div>\n    <h3>" + Q.text("Forms.Membership.Login.FormTitle") + "</h3>\n    <form id=\"~_Form\" action=\"\">\n        <div class=\"s-Form\">\n            <div class=\"fieldset ui-widget ui-widget-content ui-corner-all\">\n                <div id=\"~_PropertyGrid\"></div>\n                <div class=\"clear\"></div>\n            </div>\n            <div class=\"buttons\">\n                <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary\">\n                    " + Q.text("Forms.Membership.Login.SignInButton") + "\n                </button>\n            </div>\n            <div class=\"actions\">\n                <a href=\"" + Q.resolveUrl('~/Account/ForgotPassword') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.ForgotPassword") + "</a>\n                <a href=\"" + Q.resolveUrl('~/Account/SignUp') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.SignUpButton") + "</a>\n                <div class=\"clear\"></div>\n            </div>\n        </div>\n    </form>\n</div>\n";
            };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = MiMovieTutorial.Membership || (MiMovieTutorial.Membership = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = MiMovieTutorial.Membership || (MiMovieTutorial.Membership = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = MiMovieTutorial.Membership || (MiMovieTutorial.Membership = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = MiMovieTutorial.Membership || (MiMovieTutorial.Membership = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = MiMovieTutorial.Membership || (MiMovieTutorial.Membership = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var GenreDialog = /** @class */ (function (_super) {
            __extends(GenreDialog, _super);
            function GenreDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new MovieDB.GenreForm(_this.idPrefix);
                return _this;
            }
            GenreDialog.prototype.getFormKey = function () { return MovieDB.GenreForm.formKey; };
            GenreDialog.prototype.getIdProperty = function () { return MovieDB.GenreRow.idProperty; };
            GenreDialog.prototype.getLocalTextPrefix = function () { return MovieDB.GenreRow.localTextPrefix; };
            GenreDialog.prototype.getNameProperty = function () { return MovieDB.GenreRow.nameProperty; };
            GenreDialog.prototype.getService = function () { return MovieDB.GenreService.baseUrl; };
            GenreDialog.prototype.getDeletePermission = function () { return MovieDB.GenreRow.deletePermission; };
            GenreDialog.prototype.getInsertPermission = function () { return MovieDB.GenreRow.insertPermission; };
            GenreDialog.prototype.getUpdatePermission = function () { return MovieDB.GenreRow.updatePermission; };
            GenreDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GenreDialog);
            return GenreDialog;
        }(Serenity.EntityDialog));
        MovieDB.GenreDialog = GenreDialog;
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var GenreGrid = /** @class */ (function (_super) {
            __extends(GenreGrid, _super);
            function GenreGrid(container) {
                return _super.call(this, container) || this;
            }
            GenreGrid.prototype.getColumnsKey = function () { return 'MovieDB.Genre'; };
            GenreGrid.prototype.getDialogType = function () { return MovieDB.GenreDialog; };
            GenreGrid.prototype.getIdProperty = function () { return MovieDB.GenreRow.idProperty; };
            GenreGrid.prototype.getInsertPermission = function () { return MovieDB.GenreRow.insertPermission; };
            GenreGrid.prototype.getLocalTextPrefix = function () { return MovieDB.GenreRow.localTextPrefix; };
            GenreGrid.prototype.getService = function () { return MovieDB.GenreService.baseUrl; };
            GenreGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GenreGrid);
            return GenreGrid;
        }(Serenity.EntityGrid));
        MovieDB.GenreGrid = GenreGrid;
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MovieTutorial;
(function (MovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var GenreListFormatter = /** @class */ (function () {
            function GenreListFormatter() {
            }
            GenreListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = MiMovieTutorial.MovieDB.GenreRow.getLookup().itemById;
                return idList.map(function (x) {
                    var g = byId[x];
                    if (!g)
                        return x.toString();
                    return Q.htmlEncode(g.Name);
                }).join(", ");
            };
            GenreListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], GenreListFormatter);
            return GenreListFormatter;
        }());
        MovieDB.GenreListFormatter = GenreListFormatter;
    })(MovieDB = MovieTutorial.MovieDB || (MovieTutorial.MovieDB = {}));
})(MovieTutorial || (MovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieDialog = /** @class */ (function (_super) {
            __extends(MovieDialog, _super);
            function MovieDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new MovieDB.MovieForm(_this.idPrefix);
                return _this;
            }
            MovieDialog.prototype.getFormKey = function () { return MovieDB.MovieForm.formKey; };
            MovieDialog.prototype.getIdProperty = function () { return MovieDB.MovieRow.idProperty; };
            MovieDialog.prototype.getLocalTextPrefix = function () { return MovieDB.MovieRow.localTextPrefix; };
            MovieDialog.prototype.getNameProperty = function () { return MovieDB.MovieRow.nameProperty; };
            MovieDialog.prototype.getService = function () { return MovieDB.MovieService.baseUrl; };
            MovieDialog.prototype.getDeletePermission = function () { return MovieDB.MovieRow.deletePermission; };
            MovieDialog.prototype.getInsertPermission = function () { return MovieDB.MovieRow.insertPermission; };
            MovieDialog.prototype.getUpdatePermission = function () { return MovieDB.MovieRow.updatePermission; };
            MovieDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MovieDialog);
            return MovieDialog;
        }(Serenity.EntityDialog));
        MovieDB.MovieDialog = MovieDialog;
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieGrid = /** @class */ (function (_super) {
            __extends(MovieGrid, _super);
            function MovieGrid(container) {
                return _super.call(this, container) || this;
            }
            MovieGrid.prototype.getColumnsKey = function () { return 'MovieDB.Movie'; };
            MovieGrid.prototype.getDialogType = function () { return MovieDB.MovieDialog; };
            MovieGrid.prototype.getIdProperty = function () { return MovieDB.MovieRow.idProperty; };
            MovieGrid.prototype.getInsertPermission = function () { return MovieDB.MovieRow.insertPermission; };
            MovieGrid.prototype.getLocalTextPrefix = function () { return MovieDB.MovieRow.localTextPrefix; };
            MovieGrid.prototype.getService = function () { return MovieDB.MovieService.baseUrl; };
            // Permite realizar busqueda con un combobox, para eligir la columna de busqueda
            MovieGrid.prototype.getQuickSearchFields = function () {
                return [
                    { name: "", title: "all" },
                    { name: "Description", title: "description" },
                    { name: "Storyline", title: "storyline" },
                    { name: "Year", title: "year" }
                ];
            };
            MovieGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MovieGrid);
            return MovieGrid;
        }(Serenity.EntityGrid));
        MovieDB.MovieGrid = MovieGrid;
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieCastDialog = /** @class */ (function (_super) {
            __extends(MovieCastDialog, _super);
            function MovieCastDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new MovieDB.MovieCastForm(_this.idPrefix);
                return _this;
            }
            MovieCastDialog.prototype.getFormKey = function () { return MovieDB.MovieCastForm.formKey; };
            MovieCastDialog.prototype.getIdProperty = function () { return MovieDB.MovieCastRow.idProperty; };
            MovieCastDialog.prototype.getLocalTextPrefix = function () { return MovieDB.MovieCastRow.localTextPrefix; };
            MovieCastDialog.prototype.getNameProperty = function () { return MovieDB.MovieCastRow.nameProperty; };
            MovieCastDialog.prototype.getService = function () { return MovieDB.MovieCastService.baseUrl; };
            MovieCastDialog.prototype.getDeletePermission = function () { return MovieDB.MovieCastRow.deletePermission; };
            MovieCastDialog.prototype.getInsertPermission = function () { return MovieDB.MovieCastRow.insertPermission; };
            MovieCastDialog.prototype.getUpdatePermission = function () { return MovieDB.MovieCastRow.updatePermission; };
            MovieCastDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MovieCastDialog);
            return MovieCastDialog;
        }(Serenity.EntityDialog));
        MovieDB.MovieCastDialog = MovieCastDialog;
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/*********************************************
 * dialogo para Editar MasterDetail MovieCast
 * *******************************************/
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var Entities;
        (function (Entities) {
            var MovieCastEditDialog = /** @class */ (function (_super) {
                __extends(MovieCastEditDialog, _super);
                function MovieCastEditDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new MovieDB.MovieCastForm(_this.idPrefix);
                    return _this;
                }
                MovieCastEditDialog.prototype.getFormKey = function () { return MovieDB.MovieCastForm.formKey; };
                MovieCastEditDialog.prototype.getNameProperty = function () { return MovieDB.MovieCastRow.nameProperty; };
                MovieCastEditDialog.prototype.getLocalTextPrefix = function () { return MovieDB.MovieCastRow.localTextPrefix; };
                MovieCastEditDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], MovieCastEditDialog);
                return MovieCastEditDialog;
            }(MiMovieTutorial.Common.GridEditorDialog));
            Entities.MovieCastEditDialog = MovieCastEditDialog;
        })(Entities = MovieDB.Entities || (MovieDB.Entities = {}));
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
// MiMovieTutorial.MovieDB.Entities
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var Entities;
        (function (Entities) {
            var MovieCastEditor = /** @class */ (function (_super) {
                __extends(MovieCastEditor, _super);
                // Cosntructor de la clase
                function MovieCastEditor(container) {
                    return _super.call(this, container) || this;
                }
                MovieCastEditor.prototype.getColumnsKey = function () { return "MovieDB.MovieCast"; };
                MovieCastEditor.prototype.getDialogType = function () { return Entities.MovieCastEditDialog; }; // Cambiamos el tipo de dialogo
                MovieCastEditor.prototype.getLocalTextPrefix = function () { return MovieDB.MovieCastRow.localTextPrefix; };
                // boton agregar
                MovieCastEditor.prototype.getAddButtonCaption = function () {
                    return "Add";
                };
                // Desplegamos el nombre compelto del actor
                MovieCastEditor.prototype.validateEntity = function (row, id) {
                    if (!_super.prototype.validateEntity.call(this, row, id))
                        return false;
                    row.PersonFullname = MovieDB.PersonRow.getLookup().itemById[row.PersonId].Fullname;
                    return true;
                };
                MovieCastEditor = __decorate([
                    Serenity.Decorators.registerEditor()
                ], MovieCastEditor);
                return MovieCastEditor;
            }(MiMovieTutorial.Common.GridEditorBase));
            Entities.MovieCastEditor = MovieCastEditor;
        })(Entities = MovieDB.Entities || (MovieDB.Entities = {}));
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var MovieCastGrid = /** @class */ (function (_super) {
            __extends(MovieCastGrid, _super);
            function MovieCastGrid(container) {
                return _super.call(this, container) || this;
            }
            MovieCastGrid.prototype.getColumnsKey = function () { return 'MovieDB.MovieCast'; };
            MovieCastGrid.prototype.getDialogType = function () { return MovieDB.MovieCastDialog; };
            MovieCastGrid.prototype.getIdProperty = function () { return MovieDB.MovieCastRow.idProperty; };
            MovieCastGrid.prototype.getInsertPermission = function () { return MovieDB.MovieCastRow.insertPermission; };
            MovieCastGrid.prototype.getLocalTextPrefix = function () { return MovieDB.MovieCastRow.localTextPrefix; };
            MovieCastGrid.prototype.getService = function () { return MovieDB.MovieCastService.baseUrl; };
            MovieCastGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MovieCastGrid);
            return MovieCastGrid;
        }(Serenity.EntityGrid));
        MovieDB.MovieCastGrid = MovieCastGrid;
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var PersonDialog = /** @class */ (function (_super) {
            __extends(PersonDialog, _super);
            function PersonDialog() {
                var _this = _super.call(this) || this;
                _this.form = new MovieDB.PersonForm(_this.idPrefix);
                _this.moviesGrid = new MovieDB.PersonMovieGrid(_this.byId("MoviesGrid"));
                _this.tabs.on('tabsactivate', function (e, i) {
                    _this.arrange();
                });
                return _this;
            }
            PersonDialog.prototype.getFormKey = function () { return MovieDB.PersonForm.formKey; };
            PersonDialog.prototype.getIdProperty = function () { return MovieDB.PersonRow.idProperty; };
            PersonDialog.prototype.getLocalTextPrefix = function () { return MovieDB.PersonRow.localTextPrefix; };
            PersonDialog.prototype.getNameProperty = function () { return MovieDB.PersonRow.nameProperty; };
            PersonDialog.prototype.getService = function () { return MovieDB.PersonService.baseUrl; };
            PersonDialog.prototype.getDeletePermission = function () { return MovieDB.PersonRow.deletePermission; };
            PersonDialog.prototype.getInsertPermission = function () { return MovieDB.PersonRow.insertPermission; };
            PersonDialog.prototype.getUpdatePermission = function () { return MovieDB.PersonRow.updatePermission; };
            // Este metodo filtra los peliculas del Personaje Especifico
            PersonDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                this.moviesGrid.personID = this.entityId;
            };
            PersonDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PersonDialog);
            return PersonDialog;
        }(Serenity.EntityDialog));
        MovieDB.PersonDialog = PersonDialog;
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var PersonGrid = /** @class */ (function (_super) {
            __extends(PersonGrid, _super);
            function PersonGrid(container) {
                return _super.call(this, container) || this;
            }
            PersonGrid.prototype.getColumnsKey = function () { return 'MovieDB.Person'; };
            PersonGrid.prototype.getDialogType = function () { return MovieDB.PersonDialog; };
            PersonGrid.prototype.getIdProperty = function () { return MovieDB.PersonRow.idProperty; };
            PersonGrid.prototype.getInsertPermission = function () { return MovieDB.PersonRow.insertPermission; };
            PersonGrid.prototype.getLocalTextPrefix = function () { return MovieDB.PersonRow.localTextPrefix; };
            PersonGrid.prototype.getService = function () { return MovieDB.PersonService.baseUrl; };
            PersonGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PersonGrid);
            return PersonGrid;
        }(Serenity.EntityGrid));
        MovieDB.PersonGrid = PersonGrid;
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var MovieDB;
    (function (MovieDB) {
        var PersonMovieGrid = /** @class */ (function (_super) {
            __extends(PersonMovieGrid, _super);
            function PersonMovieGrid(container) {
                return _super.call(this, container) || this;
            }
            PersonMovieGrid.prototype.getColumnsKey = function () { return "MovieDB.PersonMovie"; };
            PersonMovieGrid.prototype.getIdProperty = function () { return MovieDB.MovieCastRow.idProperty; };
            PersonMovieGrid.prototype.getLocalTextPrefix = function () { return MovieDB.MovieCastRow.localTextPrefix; };
            PersonMovieGrid.prototype.getService = function () { return MovieDB.MovieCastService.baseUrl; };
            PersonMovieGrid.prototype.getButtons = function () {
                return null;
            };
            PersonMovieGrid.prototype.getInitialTitle = function () {
                return null;
            };
            PersonMovieGrid.prototype.usePager = function () {
                return false;
            };
            PersonMovieGrid.prototype.getGridCanLoad = function () {
                return this.personID != null;
            };
            Object.defineProperty(PersonMovieGrid.prototype, "personID", {
                get: function () {
                    return this._personID;
                },
                set: function (value) {
                    if (this._personID != value) {
                        this._personID = value;
                        this.setEquality("PersonId" /* PersonId */, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            PersonMovieGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PersonMovieGrid);
            return PersonMovieGrid;
        }(Serenity.EntityGrid));
        MovieDB.PersonMovieGrid = PersonMovieGrid;
    })(MovieDB = MiMovieTutorial.MovieDB || (MiMovieTutorial.MovieDB = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var CustomerEditor = /** @class */ (function (_super) {
            __extends(CustomerEditor, _super);
            function CustomerEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            CustomerEditor.prototype.getLookupKey = function () {
                return 'Northwind.Customer';
            };
            CustomerEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) + ' [' + item.CustomerID + ']';
            };
            CustomerEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], CustomerEditor);
            return CustomerEditor;
        }(Serenity.LookupEditorBase));
        Northwind.CustomerEditor = CustomerEditor;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../Order/OrderDialog.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var CustomerOrderDialog = /** @class */ (function (_super) {
            __extends(CustomerOrderDialog, _super);
            function CustomerOrderDialog() {
                return _super.call(this) || this;
            }
            CustomerOrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.CustomerID, true);
            };
            CustomerOrderDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerOrderDialog);
            return CustomerOrderDialog;
        }(Northwind.OrderDialog));
        Northwind.CustomerOrderDialog = CustomerOrderDialog;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
/// <reference path="../Order/OrderGrid.ts" />
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var CustomerOrdersGrid = /** @class */ (function (_super) {
            __extends(CustomerOrdersGrid, _super);
            function CustomerOrdersGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerOrdersGrid.prototype.getDialogType = function () { return Northwind.CustomerOrderDialog; };
            CustomerOrdersGrid.prototype.getColumns = function () {
                return _super.prototype.getColumns.call(this).filter(function (x) { return x.field !== "CustomerCompanyName" /* CustomerCompanyName */; });
            };
            CustomerOrdersGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            CustomerOrdersGrid.prototype.addButtonClick = function () {
                this.editItem({ CustomerID: this.customerID });
            };
            CustomerOrdersGrid.prototype.getInitialTitle = function () {
                return null;
            };
            CustomerOrdersGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.customerID;
            };
            Object.defineProperty(CustomerOrdersGrid.prototype, "customerID", {
                get: function () {
                    return this._customerID;
                },
                set: function (value) {
                    if (this._customerID !== value) {
                        this._customerID = value;
                        this.setEquality('CustomerID', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            CustomerOrdersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerOrdersGrid);
            return CustomerOrdersGrid;
        }(Northwind.OrderGrid));
        Northwind.CustomerOrdersGrid = CustomerOrdersGrid;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var EmployeeListFormatter = /** @class */ (function () {
            function EmployeeListFormatter() {
            }
            EmployeeListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = Northwind.EmployeeRow.getLookup().itemById;
                var z;
                return idList.map(function (x) { return ((z = byId[x]) ? z.FullName : x); }).join(", ");
            };
            EmployeeListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EmployeeListFormatter);
            return EmployeeListFormatter;
        }());
        Northwind.EmployeeListFormatter = EmployeeListFormatter;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var EmployeeFormatter = /** @class */ (function () {
            function EmployeeFormatter() {
            }
            EmployeeFormatter.prototype.format = function (ctx) {
                var text = Q.htmlEncode(ctx.value);
                if (!this.genderProperty) {
                    return text;
                }
                var gender = ctx.item[this.genderProperty];
                return "<span class='" + ((gender === Northwind.Gender.Female) ?
                    'employee-symbol female' : 'employee-symbol male') +
                    "'>" + text + '</span>';
            };
            EmployeeFormatter.prototype.initializeColumn = function (column) {
                column.referencedFields = column.referencedFields || [];
                if (this.genderProperty)
                    column.referencedFields.push(this.genderProperty);
            };
            __decorate([
                Serenity.Decorators.option()
            ], EmployeeFormatter.prototype, "genderProperty", void 0);
            EmployeeFormatter = __decorate([
                Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
            ], EmployeeFormatter);
            return EmployeeFormatter;
        }());
        Northwind.EmployeeFormatter = EmployeeFormatter;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var NoteDialog = /** @class */ (function (_super) {
            __extends(NoteDialog, _super);
            function NoteDialog() {
                var _this = _super.call(this) || this;
                _this.textEditor = new Serenity.HtmlNoteContentEditor(_this.byId('Text'));
                return _this;
            }
            NoteDialog.prototype.getTemplate = function () {
                return ("<form id='~_Form' class='s-Form'>" +
                    "<textarea id='~_Text' class='required'></textarea>" +
                    "</form>");
            };
            NoteDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            if (!_this.validateForm()) {
                                return;
                            }
                            _this.okClick && _this.okClick();
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                return opt;
            };
            Object.defineProperty(NoteDialog.prototype, "text", {
                get: function () {
                    return this.textEditor.value;
                },
                set: function (value) {
                    this.textEditor.value = value;
                },
                enumerable: true,
                configurable: true
            });
            NoteDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NoteDialog);
            return NoteDialog;
        }(Serenity.TemplatedDialog));
        Northwind.NoteDialog = NoteDialog;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var NotesEditor = /** @class */ (function (_super) {
            __extends(NotesEditor, _super);
            function NotesEditor(div) {
                var _this = _super.call(this, div) || this;
                new Serenity.Toolbar(_this.byId('Toolbar'), {
                    buttons: [{
                            title: 'Add Note',
                            cssClass: 'add-button',
                            onClick: function (e) {
                                e.preventDefault();
                                _this.addClick();
                            }
                        }]
                });
                return _this;
            }
            NotesEditor.prototype.getTemplate = function () {
                return "<div><div id='~_Toolbar'></div><ul id='~_NoteList'></ul></div>";
            };
            NotesEditor.prototype.updateContent = function () {
                var _this = this;
                var noteList = this.byId('NoteList');
                noteList.children().remove();
                if (this.items) {
                    var index = 0;
                    for (var t1 = 0; t1 < this.items.length; t1++) {
                        var item = this.items[t1];
                        var li = $('<li/>');
                        $('<div/>').addClass('note-text').html(Q.coalesce(item.Text, '')).appendTo(li);
                        $('<a/>').attr('href', '#').addClass('note-date')
                            .text(item.InsertUserDisplayName + ' - ' +
                            Q.formatDate(item.InsertDate, 'g'))
                            .data('index', index).appendTo(li).click(function (e) { return _this.editClick(e); });
                        $('<a/>').attr('href', '#').addClass('note-delete')
                            .attr('title', 'delete note').data('index', index)
                            .appendTo(li).click(function (e) { return _this.deleteClick(e); });
                        li.appendTo(noteList);
                        index++;
                    }
                }
            };
            NotesEditor.prototype.addClick = function () {
                var _this = this;
                var dlg = new Northwind.NoteDialog();
                dlg.dialogTitle = 'Add Note';
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (text == null) {
                        return;
                    }
                    _this.items = _this.items || [];
                    Q.insert(_this.items, 0, {
                        Text: text,
                        InsertUserDisplayName: MiMovieTutorial.Authorization.userDefinition.DisplayName,
                        InsertDate: Q.formatISODateTimeUTC(new Date())
                    });
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.editClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                var old = this.items[index];
                var dlg = new Northwind.NoteDialog();
                dlg.dialogTitle = 'Edit Note';
                dlg.text = old.Text;
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (!text) {
                        return;
                    }
                    _this.items[index].Text = text;
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.deleteClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                Q.confirm('Delete this note?', function () {
                    _this.items.splice(index, 1);
                    _this.updateContent();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                });
            };
            Object.defineProperty(NotesEditor.prototype, "value", {
                get: function () {
                    return this.items;
                },
                set: function (value) {
                    this.items = value || [];
                    this.set_isDirty(false);
                    this.updateContent();
                },
                enumerable: true,
                configurable: true
            });
            NotesEditor.prototype.getEditValue = function (prop, target) {
                target[prop.name] = this.value;
            };
            NotesEditor.prototype.setEditValue = function (source, prop) {
                this.value = source[prop.name] || [];
            };
            NotesEditor.prototype.get_isDirty = function () {
                return this.isDirty;
            };
            NotesEditor.prototype.set_isDirty = function (value) {
                this.isDirty = value;
            };
            NotesEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.element("<div/>")
            ], NotesEditor);
            return NotesEditor;
        }(Serenity.TemplatedWidget));
        Northwind.NotesEditor = NotesEditor;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var FreightFormatter = /** @class */ (function () {
            function FreightFormatter() {
            }
            FreightFormatter.prototype.format = function (ctx) {
                return "<span class='freight-symbol'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            FreightFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], FreightFormatter);
            return FreightFormatter;
        }());
        Northwind.FreightFormatter = FreightFormatter;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var RegionDialog = /** @class */ (function (_super) {
            __extends(RegionDialog, _super);
            function RegionDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.RegionForm(_this.idPrefix);
                return _this;
            }
            RegionDialog.prototype.getFormKey = function () { return Northwind.RegionForm.formKey; };
            RegionDialog.prototype.getIdProperty = function () { return Northwind.RegionRow.idProperty; };
            RegionDialog.prototype.getLocalTextPrefix = function () { return Northwind.RegionRow.localTextPrefix; };
            RegionDialog.prototype.getNameProperty = function () { return Northwind.RegionRow.nameProperty; };
            RegionDialog.prototype.getService = function () { return Northwind.RegionService.baseUrl; };
            RegionDialog.prototype.getLanguages = function () {
                return MiMovieTutorial.LanguageList.getValue();
            };
            RegionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RegionDialog);
            return RegionDialog;
        }(Serenity.EntityDialog));
        Northwind.RegionDialog = RegionDialog;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var RegionGrid = /** @class */ (function (_super) {
            __extends(RegionGrid, _super);
            function RegionGrid(container) {
                return _super.call(this, container) || this;
            }
            RegionGrid.prototype.getColumnsKey = function () { return "Northwind.Region"; };
            RegionGrid.prototype.getDialogType = function () { return Northwind.RegionDialog; };
            RegionGrid.prototype.getIdProperty = function () { return Northwind.RegionRow.idProperty; };
            RegionGrid.prototype.getLocalTextPrefix = function () { return Northwind.RegionRow.localTextPrefix; };
            RegionGrid.prototype.getService = function () { return Northwind.RegionService.baseUrl; };
            RegionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RegionGrid);
            return RegionGrid;
        }(Serenity.EntityGrid));
        Northwind.RegionGrid = RegionGrid;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var PhoneEditor = /** @class */ (function (_super) {
            __extends(PhoneEditor, _super);
            function PhoneEditor(input) {
                var _this = _super.call(this, input) || this;
                _this.addValidationRule(_this.uniqueName, function (e) {
                    var value = Q.trimToNull(_this.get_value());
                    if (value == null) {
                        return null;
                    }
                    return PhoneEditor_1.validate(value, _this.multiple);
                });
                input.bind('change', function (e) {
                    if (!Serenity.WX.hasOriginalEvent(e)) {
                        return;
                    }
                    _this.formatValue();
                });
                input.bind('blur', function (e) {
                    if (_this.element.hasClass('valid')) {
                        _this.formatValue();
                    }
                });
                return _this;
            }
            PhoneEditor_1 = PhoneEditor;
            PhoneEditor.prototype.formatValue = function () {
                this.element.val(this.getFormattedValue());
            };
            PhoneEditor.prototype.getFormattedValue = function () {
                var value = this.element.val();
                if (this.multiple) {
                    return PhoneEditor_1.formatMulti(value, PhoneEditor_1.formatPhone);
                }
                return PhoneEditor_1.formatPhone(value);
            };
            PhoneEditor.prototype.get_value = function () {
                return this.getFormattedValue();
            };
            PhoneEditor.prototype.set_value = function (value) {
                this.element.val(value);
            };
            PhoneEditor.validate = function (phone, isMultiple) {
                var valid = (isMultiple ? PhoneEditor_1.isValidMulti(phone, PhoneEditor_1.isValidPhone) : PhoneEditor_1.isValidPhone(phone));
                if (valid) {
                    return null;
                }
                return Q.text((isMultiple ? 'Validation.NorthwindPhoneMultiple' : 'Validation.NorthwindPhone'));
            };
            PhoneEditor.isValidPhone = function (phone) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                phone = Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', '');
                if (phone.length < 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                if (Q.startsWith(phone, '(') && phone.charAt(4) === ')') {
                    phone = phone.substr(1, 3) + phone.substring(5);
                }
                if (phone.length !== 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    return false;
                }
                for (var i = 0; i < phone.length; i++) {
                    var c = phone.charAt(i);
                    if (c < '0' || c > '9') {
                        return false;
                    }
                }
                return true;
            };
            PhoneEditor.formatPhone = function (phone) {
                if (!PhoneEditor_1.isValidPhone(phone)) {
                    return phone;
                }
                phone = Q.replaceAll(Q.replaceAll(Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', ''), '(', ''), ')', '');
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                phone = '(' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + '-' + phone.substr(6, 2) + phone.substr(8, 2);
                return phone;
            };
            PhoneEditor.formatMulti = function (phone, format) {
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var result = '';
                for (var _i = 0, phones_1 = phones; _i < phones_1.length; _i++) {
                    var x = phones_1[_i];
                    var s = Q.trimToNull(x);
                    if (s == null) {
                        continue;
                    }
                    if (result.length > 0) {
                        result += ', ';
                    }
                    result += format(s);
                }
                return result;
            };
            PhoneEditor.isValidMulti = function (phone, check) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var anyValid = false;
                for (var $t1 = 0; $t1 < phones.length; $t1++) {
                    var x = phones[$t1];
                    var s = Q.trimToNull(x);
                    if (s == null) {
                        continue;
                    }
                    if (!check(s)) {
                        return false;
                    }
                    anyValid = true;
                }
                if (!anyValid) {
                    return false;
                }
                return true;
            };
            var PhoneEditor_1;
            __decorate([
                Serenity.Decorators.option()
            ], PhoneEditor.prototype, "multiple", void 0);
            PhoneEditor = PhoneEditor_1 = __decorate([
                Serenity.Decorators.registerEditor()
            ], PhoneEditor);
            return PhoneEditor;
        }(Serenity.StringEditor));
        Northwind.PhoneEditor = PhoneEditor;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var ShipperDialog = /** @class */ (function (_super) {
            __extends(ShipperDialog, _super);
            function ShipperDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.ShipperForm(_this.idPrefix);
                return _this;
            }
            ShipperDialog.prototype.getFormKey = function () { return Northwind.ShipperForm.formKey; };
            ShipperDialog.prototype.getIdProperty = function () { return Northwind.ShipperRow.idProperty; };
            ShipperDialog.prototype.getLocalTextPrefix = function () { return Northwind.ShipperRow.localTextPrefix; };
            ShipperDialog.prototype.getNameProperty = function () { return Northwind.ShipperRow.nameProperty; };
            ShipperDialog.prototype.getService = function () { return Northwind.ShipperService.baseUrl; };
            ShipperDialog.prototype.getLanguages = function () {
                return MiMovieTutorial.LanguageList.getValue();
            };
            ShipperDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ShipperDialog);
            return ShipperDialog;
        }(Serenity.EntityDialog));
        Northwind.ShipperDialog = ShipperDialog;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var ShipperFormatter = /** @class */ (function () {
            function ShipperFormatter() {
            }
            ShipperFormatter.prototype.format = function (ctx) {
                return "<span class='shipper-symbol shipper-" +
                    Q.replaceAll((ctx.value || '').toString(), ' ', '') +
                    "'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            ShipperFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], ShipperFormatter);
            return ShipperFormatter;
        }());
        Northwind.ShipperFormatter = ShipperFormatter;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var ShipperGrid = /** @class */ (function (_super) {
            __extends(ShipperGrid, _super);
            function ShipperGrid(container) {
                return _super.call(this, container) || this;
            }
            ShipperGrid.prototype.getColumnsKey = function () { return "Northwind.Shipper"; };
            ShipperGrid.prototype.getDialogType = function () { return Northwind.ShipperDialog; };
            ShipperGrid.prototype.getIdProperty = function () { return Northwind.ShipperRow.idProperty; };
            ShipperGrid.prototype.getLocalTextPrefix = function () { return Northwind.ShipperRow.localTextPrefix; };
            ShipperGrid.prototype.getService = function () { return Northwind.ShipperService.baseUrl; };
            ShipperGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ShipperGrid);
            return ShipperGrid;
        }(Serenity.EntityGrid));
        Northwind.ShipperGrid = ShipperGrid;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var TerritoryDialog = /** @class */ (function (_super) {
            __extends(TerritoryDialog, _super);
            function TerritoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.TerritoryForm(_this.idPrefix);
                return _this;
            }
            TerritoryDialog.prototype.getFormKey = function () { return Northwind.TerritoryForm.formKey; };
            TerritoryDialog.prototype.getIdProperty = function () { return Northwind.TerritoryRow.idProperty; };
            TerritoryDialog.prototype.getLocalTextPrefix = function () { return Northwind.TerritoryRow.localTextPrefix; };
            TerritoryDialog.prototype.getNameProperty = function () { return Northwind.TerritoryRow.nameProperty; };
            TerritoryDialog.prototype.getService = function () { return Northwind.TerritoryService.baseUrl; };
            TerritoryDialog.prototype.getLanguages = function () {
                return MiMovieTutorial.LanguageList.getValue();
            };
            TerritoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TerritoryDialog);
            return TerritoryDialog;
        }(Serenity.EntityDialog));
        Northwind.TerritoryDialog = TerritoryDialog;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));
var MiMovieTutorial;
(function (MiMovieTutorial) {
    var Northwind;
    (function (Northwind) {
        var TerritoryGrid = /** @class */ (function (_super) {
            __extends(TerritoryGrid, _super);
            function TerritoryGrid(container) {
                return _super.call(this, container) || this;
            }
            TerritoryGrid.prototype.getColumnsKey = function () { return "Northwind.Territory"; };
            TerritoryGrid.prototype.getDialogType = function () { return Northwind.TerritoryDialog; };
            TerritoryGrid.prototype.getIdProperty = function () { return Northwind.TerritoryRow.idProperty; };
            TerritoryGrid.prototype.getLocalTextPrefix = function () { return Northwind.TerritoryRow.localTextPrefix; };
            TerritoryGrid.prototype.getService = function () { return Northwind.TerritoryService.baseUrl; };
            TerritoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TerritoryGrid);
            return TerritoryGrid;
        }(Serenity.EntityGrid));
        Northwind.TerritoryGrid = TerritoryGrid;
    })(Northwind = MiMovieTutorial.Northwind || (MiMovieTutorial.Northwind = {}));
})(MiMovieTutorial || (MiMovieTutorial = {}));