require "test_helper"

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get static_pages_home_url
    assert_response :success
  end

  test "should get about" do
    get static_pages_about_url
    assert_response :success
  end

  test "should get login" do
    get static_pages_login_url
    assert_response :success
  end

  test "should get signup" do
    get static_pages_signup_url
    assert_response :success
  end

  test "should get tasks" do
    get static_pages_tasks_url
    assert_response :success
  end
end
