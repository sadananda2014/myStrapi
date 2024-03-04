import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginChartbrewChartbrew extends Schema.SingleType {
  collectionName: 'chartbrews';
  info: {
    singularName: 'chartbrew';
    pluralName: 'chartbrews';
    displayName: 'Chartbrew';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  attributes: {
    host: Attribute.String & Attribute.Required;
    token: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::chartbrew.chartbrew',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::chartbrew.chartbrew',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    user_role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'api::user-role.user-role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBinderyBindery extends Schema.CollectionType {
  collectionName: 'binderies';
  info: {
    singularName: 'bindery';
    pluralName: 'binderies';
    displayName: 'bindery';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bindery_id: Attribute.BigInteger & Attribute.Required & Attribute.Unique;
    order_number: Attribute.BigInteger & Attribute.Required;
    fld1: Attribute.Text & Attribute.Required;
    bindery_status: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    comp_members_id: Attribute.Relation<
      'api::bindery.bindery',
      'oneToOne',
      'api::company-member.company-member'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::bindery.bindery',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::bindery.bindery',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBinderyCountBinderyCount extends Schema.CollectionType {
  collectionName: 'bindery_counts';
  info: {
    singularName: 'bindery-count';
    pluralName: 'bindery-counts';
    displayName: 'bindery_count';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bindery_count_id: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<0>;
    order_number: Attribute.BigInteger & Attribute.Required;
    comp_members_id: Attribute.BigInteger & Attribute.Required;
    binderycount: Attribute.Text & Attribute.Required;
    bindery_count_status: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::bindery-count.bindery-count',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::bindery-count.bindery-count',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCompanyMemberCompanyMember extends Schema.CollectionType {
  collectionName: 'company_members';
  info: {
    singularName: 'company-member';
    pluralName: 'company-members';
    displayName: 'company_member';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    comp_members_id: Attribute.Integer;
    comp_members_login: Attribute.String;
    comp_members_password: Attribute.Password;
    comp_members_first: Attribute.String;
    comp_members_last: Attribute.String;
    comp_members_address: Attribute.Text;
    comp_members_city: Attribute.String;
    comp_members_state: Attribute.String;
    comp_members_zipcode: Attribute.String;
    comp_members_phone1: Attribute.String;
    comp_members_phone2: Attribute.String;
    comp_members_extension: Attribute.String;
    comp_members_email: Attribute.String;
    comp_members_notes: Attribute.String;
    comp_level_id: Attribute.Relation<
      'api::company-member.company-member',
      'oneToOne',
      'api::company-members-level.company-members-level'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::company-member.company-member',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::company-member.company-member',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCompanyMembersLevelCompanyMembersLevel
  extends Schema.CollectionType {
  collectionName: 'company_members_levels';
  info: {
    singularName: 'company-members-level';
    pluralName: 'company-members-levels';
    displayName: 'company_members_level';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    comp_level_id: Attribute.Integer & Attribute.Required & Attribute.Unique;
    comp_level_name: Attribute.String & Attribute.Required & Attribute.Unique;
    comp_level_description: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::company-members-level.company-members-level',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::company-members-level.company-members-level',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrderOrder extends Schema.CollectionType {
  collectionName: 'orders';
  info: {
    singularName: 'order';
    pluralName: 'orders';
    displayName: 'order';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    orders_id: Attribute.Integer;
    order_number: Attribute.BigInteger;
    comp_members_id: Attribute.Integer;
    contact: Attribute.Text;
    soldto: Attribute.String;
    address: Attribute.String;
    city: Attribute.String;
    state: Attribute.String;
    zipcode: Attribute.String;
    phone: Attribute.String;
    mobile: Attribute.String;
    fax: Attribute.String;
    email: Attribute.String;
    jobnumber: Attribute.String;
    orderdate: Attribute.String;
    ordership: Attribute.String;
    orderdue: Attribute.String;
    customerordernumber: Attribute.String;
    pj: Attribute.String;
    quotenumber: Attribute.String;
    stockin: Attribute.String;
    specialinstruction: Attribute.String;
    extra: Attribute.Text;
    items: Attribute.String;
    prepressinstruction: Attribute.String;
    prepressacs: Attribute.String;
    prepresssupplied: Attribute.String;
    presstrimsize: Attribute.String;
    order_status: Attribute.Boolean;
    prepress_status: Attribute.Boolean;
    press240_status: Attribute.Boolean;
    press528_status: Attribute.Boolean;
    press540_status: Attribute.Boolean;
    bindery_status: Attribute.Boolean;
    invoice_status: Attribute.Boolean;
    billing_status: Attribute.Boolean;
    prepresspriority: Attribute.Integer;
    priority240: Attribute.Integer;
    priority528: Attribute.Integer;
    priority540: Attribute.Integer;
    binderypriority: Attribute.Integer;
    shippingpriority: Attribute.Integer;
    invoicepriority: Attribute.Integer;
    billingpriority: Attribute.Integer;
    shipping_status: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::order.order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::order.order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPressPress extends Schema.CollectionType {
  collectionName: 'presses';
  info: {
    singularName: 'press';
    pluralName: 'presses';
    displayName: 'press';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    press_id: Attribute.BigInteger & Attribute.Required;
    order_number: Attribute.BigInteger & Attribute.Required;
    comp_members_id: Attribute.Integer & Attribute.Required;
    dropfront: Attribute.Text & Attribute.Required;
    pressfront: Attribute.Text & Attribute.Required;
    dropback: Attribute.Text;
    pressback: Attribute.Text & Attribute.Required;
    pressnumber: Attribute.String;
    pressnetsheet: Attribute.String;
    pressover: Attribute.String;
    presstotalsheet: Attribute.Text & Attribute.Required;
    pressfinishedcount: Attribute.String;
    pressform: Attribute.String;
    pressnote: Attribute.String;
    press_status: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::press.press',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::press.press',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiQuoteQuote extends Schema.CollectionType {
  collectionName: 'quotes';
  info: {
    singularName: 'quote';
    pluralName: 'quotes';
    displayName: 'quote';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    quote_id: Attribute.BigInteger & Attribute.Required & Attribute.Unique;
    quote_number: Attribute.BigInteger;
    comp_members_id: Attribute.Integer;
    quoter: Attribute.String;
    thedate: Attribute.String;
    thetime: Attribute.String;
    company: Attribute.String;
    contact: Attribute.String;
    address: Attribute.Text;
    city: Attribute.Text;
    state: Attribute.String;
    zipcode: Attribute.Text;
    phone: Attribute.String;
    mobile: Attribute.String;
    fax: Attribute.String;
    email: Attribute.String;
    description: Attribute.Text;
    coverage: Attribute.String;
    bleed: Attribute.String;
    side: Attribute.String;
    flat: Attribute.String;
    finishedsize: Attribute.String;
    page: Attribute.String;
    pluscover: Attribute.String;
    selfcover: Attribute.String;
    art: Attribute.String;
    artdescription: Attribute.Text;
    tradeline: Attribute.String;
    tradecolor: Attribute.String;
    suppliedline: Attribute.String;
    suppliedcolor: Attribute.String;
    stocktext: Attribute.String;
    stockcover: Attribute.String;
    stocksupplied: Attribute.String;
    cut: Attribute.String;
    score: Attribute.String;
    perf: Attribute.String;
    fold: Attribute.Text;
    stitch: Attribute.String;
    otherbindery: Attribute.String;
    packaging: Attribute.String;
    packagingdescription: Attribute.Text;
    otherpackaging: Attribute.String;
    delivery: Attribute.String;
    deliverydescription: Attribute.String;
    stocksizetext: Attribute.String;
    stocksizecover: Attribute.String;
    quote_status: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::quote.quote',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::quote.quote',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiShippingShipping extends Schema.CollectionType {
  collectionName: 'shippings';
  info: {
    singularName: 'shipping';
    pluralName: 'shippings';
    displayName: 'shipping';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    order_number: Attribute.Integer;
    company_member_id: Attribute.Relation<
      'api::shipping.shipping',
      'oneToOne',
      'api::company-member.company-member'
    >;
    shipto: Attribute.String;
    shipaddress: Attribute.Text;
    shipcity: Attribute.String;
    shipstate: Attribute.String;
    shipzipcode: Attribute.Integer;
    shipphone: Attribute.BigInteger;
    shipmobile: Attribute.BigInteger;
    shipfax: Attribute.String;
    shipemail: Attribute.String;
    shipcontact: Attribute.String;
    shipwillcall: Attribute.String;
    shipsample: Attribute.String;
    shipping_status: Attribute.Boolean;
    shipping_inv_ids: Attribute.Relation<
      'api::shipping.shipping',
      'oneToMany',
      'api::shippinginvoice.shippinginvoice'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::shipping.shipping',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::shipping.shipping',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiShippinginvoiceShippinginvoice
  extends Schema.CollectionType {
  collectionName: 'shippinginvoices';
  info: {
    singularName: 'shippinginvoice';
    pluralName: 'shippinginvoices';
    displayName: 'shippinginvoice';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    order_number: Attribute.Integer;
    comp_members_id: Attribute.Integer;
    shipping_id: Attribute.Integer;
    jobnumber: Attribute.String;
    customer: Attribute.String;
    address: Attribute.Text;
    city: Attribute.String;
    state: Attribute.String;
    zipcode: Attribute.String;
    phone: Attribute.String;
    email: Attribute.String;
    contact: Attribute.String;
    shipto: Attribute.String;
    shipaddress: Attribute.String;
    shipcity: Attribute.String;
    shipstate: Attribute.String;
    shipzipcode: Attribute.String;
    shipphone: Attribute.String;
    shipemail: Attribute.String;
    shipdescription: Attribute.Text;
    shipreturn: Attribute.String;
    returndescription: Attribute.String;
    shipvia: Attribute.String;
    viadescription: Attribute.Text;
    receivedby: Attribute.String;
    datereceived: Attribute.String;
    status: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::shippinginvoice.shippinginvoice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::shippinginvoice.shippinginvoice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiShippinginvoiceQuantityShippinginvoiceQuantity
  extends Schema.CollectionType {
  collectionName: 'shippinginvoice_quantities';
  info: {
    singularName: 'shippinginvoice-quantity';
    pluralName: 'shippinginvoice-quantities';
    displayName: 'shippinginvoice_quantity';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    order_number: Attribute.Integer;
    comp_members_id: Attribute.Integer;
    shipping_id: Attribute.Integer;
    ordered: Attribute.String;
    shipped: Attribute.String;
    cartons: Attribute.String;
    status: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::shippinginvoice-quantity.shippinginvoice-quantity',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::shippinginvoice-quantity.shippinginvoice-quantity',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStateState extends Schema.CollectionType {
  collectionName: 'states';
  info: {
    singularName: 'state';
    pluralName: 'states';
    displayName: 'state';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    state_id: Attribute.UID;
    state_abv: Attribute.String;
    state_name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::state.state',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::state.state',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStockStock extends Schema.CollectionType {
  collectionName: 'stocks';
  info: {
    singularName: 'stock';
    pluralName: 'stocks';
    displayName: 'stock';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    order_number: Attribute.Integer;
    comp_members_id: Attribute.Integer;
    stocksheet1: Attribute.String;
    stocksheet2: Attribute.String;
    stocksheet3: Attribute.String;
    stocksub: Attribute.String;
    stockout: Attribute.String;
    stockpcs: Attribute.String;
    stock_status: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::stock.stock',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::stock.stock',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSubQuote1SubQuote1 extends Schema.CollectionType {
  collectionName: 'sub_quote1s';
  info: {
    singularName: 'sub-quote1';
    pluralName: 'sub-quote1s';
    displayName: 'sub_quote1';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    quote_number: Attribute.Integer;
    comp_members_id: Attribute.Integer;
    ink: Attribute.String;
    black: Attribute.String;
    process: Attribute.String;
    pms: Attribute.String;
    aqu: Attribute.String;
    var: Attribute.String;
    sub_quote_status: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sub-quote1.sub-quote1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sub-quote1.sub-quote1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSubQuote2SubQuote2 extends Schema.CollectionType {
  collectionName: 'sub_quote2s';
  info: {
    singularName: 'sub-quote2';
    pluralName: 'sub-quote2s';
    displayName: 'sub_quote2';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    quote_number: Attribute.Integer;
    comp_members_id: Attribute.Integer;
    quantity: Attribute.Integer;
    price: Attribute.BigInteger;
    text: Attribute.String;
    textcover: Attribute.String;
    sub_quote2_status: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sub-quote2.sub-quote2',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sub-quote2.sub-quote2',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTestTest extends Schema.CollectionType {
  collectionName: 'tests';
  info: {
    singularName: 'test';
    pluralName: 'tests';
    displayName: 'test';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    slugTest: Attribute.UID;
    testTitle: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::test.test', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::test.test', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiUserRoleUserRole extends Schema.CollectionType {
  collectionName: 'user_roles';
  info: {
    singularName: 'user-role';
    pluralName: 'user-roles';
    displayName: 'user-role';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    roleName: Attribute.String & Attribute.Required & Attribute.Unique;
    users: Attribute.Relation<
      'api::user-role.user-role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::user-role.user-role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::user-role.user-role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVendorVendor extends Schema.CollectionType {
  collectionName: 'vendors';
  info: {
    singularName: 'vendor';
    pluralName: 'vendors';
    displayName: 'vendor';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    vendor_id: Attribute.Integer & Attribute.Required & Attribute.Unique;
    order_number: Attribute.Integer;
    vendorname: Attribute.String;
    vendorprice: Attribute.String;
    vendor_status: Attribute.Boolean;
    company_member_id: Attribute.Relation<
      'api::vendor.vendor',
      'oneToOne',
      'api::company-member.company-member'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vendor.vendor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::vendor.vendor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::chartbrew.chartbrew': PluginChartbrewChartbrew;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::bindery.bindery': ApiBinderyBindery;
      'api::bindery-count.bindery-count': ApiBinderyCountBinderyCount;
      'api::company-member.company-member': ApiCompanyMemberCompanyMember;
      'api::company-members-level.company-members-level': ApiCompanyMembersLevelCompanyMembersLevel;
      'api::order.order': ApiOrderOrder;
      'api::press.press': ApiPressPress;
      'api::quote.quote': ApiQuoteQuote;
      'api::shipping.shipping': ApiShippingShipping;
      'api::shippinginvoice.shippinginvoice': ApiShippinginvoiceShippinginvoice;
      'api::shippinginvoice-quantity.shippinginvoice-quantity': ApiShippinginvoiceQuantityShippinginvoiceQuantity;
      'api::state.state': ApiStateState;
      'api::stock.stock': ApiStockStock;
      'api::sub-quote1.sub-quote1': ApiSubQuote1SubQuote1;
      'api::sub-quote2.sub-quote2': ApiSubQuote2SubQuote2;
      'api::test.test': ApiTestTest;
      'api::user-role.user-role': ApiUserRoleUserRole;
      'api::vendor.vendor': ApiVendorVendor;
    }
  }
}
