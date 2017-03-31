# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170330222531) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
    t.string   "username",   null: false
    t.string   "email"
    t.string   "name"
    t.string   "role",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "inventories", force: :cascade do |t|
    t.integer  "stock",      default: 0
    t.integer  "size_id"
    t.integer  "product_id"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.index ["product_id"], name: "index_inventories_on_product_id", using: :btree
    t.index ["size_id"], name: "index_inventories_on_size_id", using: :btree
  end

  create_table "materials", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "materials_products_linkings", force: :cascade do |t|
    t.integer  "material_id"
    t.integer  "product_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["material_id"], name: "index_materials_products_linkings_on_material_id", using: :btree
    t.index ["product_id"], name: "index_materials_products_linkings_on_product_id", using: :btree
  end

  create_table "messages", force: :cascade do |t|
    t.string   "email",      null: false
    t.string   "name"
    t.string   "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "order_lines", force: :cascade do |t|
    t.integer  "orders_id"
    t.integer  "inventories_id"
    t.integer  "quantity",             default: 1
    t.integer  "price_at_order_cents",             null: false
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.index ["inventories_id"], name: "index_order_lines_on_inventories_id", using: :btree
    t.index ["orders_id"], name: "index_order_lines_on_orders_id", using: :btree
  end

  create_table "orders", force: :cascade do |t|
    t.string   "status",     null: false
    t.string   "notes"
    t.string   "coupon"
    t.integer  "users_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["users_id"], name: "index_orders_on_users_id", using: :btree
  end

  create_table "pages", force: :cascade do |t|
    t.string   "slug",       null: false
    t.string   "title",      null: false
    t.text     "body",       null: false
    t.string   "image_url"
    t.string   "category"
    t.string   "tags"
    t.integer  "admin_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["admin_id"], name: "index_pages_on_admin_id", using: :btree
  end

  create_table "products", force: :cascade do |t|
    t.string   "model",                                      null: false
    t.string   "sku"
    t.text     "description"
    t.string   "color"
    t.string   "style"
    t.string   "genderism",               default: "unisex"
    t.string   "material_description"
    t.string   "image_url",                                  null: false
    t.integer  "price_cents",                                null: false
    t.boolean  "featured",                default: false
    t.boolean  "promo",                   default: false
    t.boolean  "on_sale",                 default: false
    t.integer  "before_sale_price_cents"
    t.datetime "created_at",                                 null: false
    t.datetime "updated_at",                                 null: false
  end

  create_table "sizes", force: :cascade do |t|
    t.string   "size",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.boolean  "member",           default: false
    t.string   "email"
    t.string   "name"
    t.string   "phone"
    t.string   "billing_address"
    t.string   "shipping_address"
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.boolean  "admin",            default: false
  end

  add_foreign_key "inventories", "products"
  add_foreign_key "inventories", "sizes"
  add_foreign_key "materials_products_linkings", "materials"
  add_foreign_key "materials_products_linkings", "products"
  add_foreign_key "order_lines", "inventories", column: "inventories_id"
  add_foreign_key "order_lines", "orders", column: "orders_id"
  add_foreign_key "orders", "users", column: "users_id"
  add_foreign_key "pages", "admins"
end
