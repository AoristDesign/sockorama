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

ActiveRecord::Schema.define(version: 20170328141143) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "materials", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "materials_products_linkings", force: :cascade do |t|
    t.integer  "materials_id"
    t.integer  "products_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["materials_id"], name: "index_materials_products_linkings_on_materials_id", using: :btree
    t.index ["products_id"], name: "index_materials_products_linkings_on_products_id", using: :btree
  end

  create_table "order_lines", force: :cascade do |t|
    t.integer  "orders_id"
    t.integer  "products_id"
    t.integer  "quantity"
    t.decimal  "price_in_cents_at_order"
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.index ["orders_id"], name: "index_order_lines_on_orders_id", using: :btree
    t.index ["products_id"], name: "index_order_lines_on_products_id", using: :btree
  end

  create_table "orders", force: :cascade do |t|
    t.string   "status"
    t.string   "notes"
    t.string   "promo"
    t.integer  "users_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["users_id"], name: "index_orders_on_users_id", using: :btree
  end

  create_table "products", force: :cascade do |t|
    t.string   "model"
    t.string   "color"
    t.string   "style"
    t.string   "size"
    t.integer  "quantity"
    t.string   "image"
    t.text     "description"
    t.decimal  "price_in_cents"
    t.string   "materials"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "users", force: :cascade do |t|
    t.boolean  "member"
    t.string   "email"
    t.string   "name"
    t.string   "phone"
    t.string   "billing_address"
    t.string   "shipping_address"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_foreign_key "materials_products_linkings", "materials", column: "materials_id"
  add_foreign_key "materials_products_linkings", "products", column: "products_id"
  add_foreign_key "order_lines", "orders", column: "orders_id"
  add_foreign_key "order_lines", "products", column: "products_id"
  add_foreign_key "orders", "users", column: "users_id"
end
